import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Rocket } from '../../core/models/rocket.model';
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
  readonly rocketDetailService = inject(RocketDetailService);

  readonly rocket = signal<Rocket | undefined>(undefined);

  // Computed messages
  readonly notFoundTitle = computed(() => 'Rocket not found');
  readonly notFoundMessage = computed(() => `The rocket with ID "${this.id()}" does not exist.`);
  readonly backButtonText = computed(() => '← Back to Home');

  constructor() {
    effect(() => {
      const rocketId = this.id();
      this.rocket.set(this.rocketDetailService.getRocketById(rocketId));
    });
  }
}
