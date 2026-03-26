import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { RocketDetailService } from './rocket-detail.service';
import { RocketDetailComponent } from './rocket-detail.component';

@Component({
  selector: 'app-rocket-detail-page',
  standalone: true,
  imports: [RocketDetailComponent, RouterLink],
  templateUrl: './rocket-detail.page.html',
  styleUrl: './rocket-detail.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class RocketDetailPage {
  readonly id = input.required<string>();
  readonly #rocketDetailService = inject(RocketDetailService);

  readonly #rocketResource = rxResource({
    request: () => this.id(),
    loader: ({ request }) => this.#rocketDetailService.getRocketById$(request),
  });

  readonly rocket = computed(() => this.#rocketResource.value());
  readonly isLoading = this.#rocketResource.isLoading;
  readonly hasError = computed(() => !!this.#rocketResource.error());

  // Computed messages
  readonly notFoundTitle = computed(() => 'Rocket not found');
  readonly notFoundMessage = computed(() => `The rocket with ID "${this.id()}" does not exist.`);
  readonly backButtonText = computed(() => '← Back to Home');
}
