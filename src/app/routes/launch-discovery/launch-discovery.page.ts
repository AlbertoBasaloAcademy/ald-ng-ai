import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { LaunchDiscoveryComponent } from './launch-discovery.component';
import { LaunchDiscoveryService } from './launch-discovery.service';

@Component({
  selector: 'app-launch-discovery-page',
  standalone: true,
  imports: [LaunchDiscoveryComponent],
  templateUrl: './launch-discovery.page.html',
  styleUrl: './launch-discovery.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LaunchDiscoveryPage {
  readonly #launchDiscoveryService = inject(LaunchDiscoveryService);

  readonly title = 'Upcoming launches';
  readonly subtitle = 'Browse launch dates, pricing, seat availability, and minimum passenger rules.';

  readonly #launchesResource = rxResource({
    loader: () => this.#launchDiscoveryService.getLaunches$(),
  });

  readonly launches = computed(() => this.#launchesResource.value() ?? []);
  readonly isLoading = this.#launchesResource.isLoading;
  readonly errorMessage = computed(() => {
    return this.#launchesResource.error() ? 'Launches could not be loaded right now.' : null;
  });
  readonly isEmpty = computed(() => !this.isLoading() && !this.errorMessage() && this.launches().length === 0);
}
