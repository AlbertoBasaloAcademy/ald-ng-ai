import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { LaunchDiscoveryService } from './launch-discovery.service';

@Component({
  selector: 'app-launch-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './launch-detail.page.html',
  styleUrl: './launch-detail.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LaunchDetailPage {
  readonly id = input.required<string>();
  readonly #launchDiscoveryService = inject(LaunchDiscoveryService);

  readonly #launchResource = rxResource({
    request: () => this.id(),
    loader: ({ request }) => this.#launchDiscoveryService.getLaunchById$(request),
  });

  readonly launch = computed(() => this.#launchResource.value());
  readonly isLoading = this.#launchResource.isLoading;
  readonly errorMessage = computed(() => {
    return this.#launchResource.error() ? 'Launch details could not be loaded right now.' : null;
  });
  readonly formattedDate = computed(() => {
    const launch = this.launch();
    if (!launch) return '';
    return new Date(launch.launchDateTime).toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    });
  });
}
