import {
  ChangeDetectionStrategy,
  Component,
  computed,
  InjectionToken,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

// import { RocketDetailComponent } from './rocket-detail.component';
//import { Rocket } from '../../core/models/rocket.model';
type Rocket = {
  id: string;
  name: string;
  range: string;
  capacity: number;
};

// import { RocketDetailService } from './rocket-detail.service';
// fake used as a template for the skill, not an actual service to be implemented by the user
class RocketDetailService {
  getById(id: string): Rocket | undefined {
    return undefined;
  }
  loading(): boolean {
    return false;
  }
}

@Component({
  selector: 'app-rocket-detail-page',
  standalone: true,
  imports: [RouterLink, RocketDetailService],
  templateUrl: './rocket-detail.page.html',
  styleUrl: './rocket-detail.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RocketDetailPage {
  readonly id = input.required<string>();

  readonly #rocketDetailService = inject(RocketDetailService);

  // Text labels as signals to avoid hardcoded strings in template
  readonly title = computed(() => 'Rocket detail');
  readonly loadingLabel = computed(() => 'Loading rocket...');
  readonly notFoundLabel = computed(() => 'Rocket not found');
  readonly backToHomeLabel = computed(() => 'Back to home');

  readonly rocket = computed(() =>
    this.#rocketDetailService.getById(this.id()),
  );
  readonly isLoading = computed(() => this.#rocketDetailService.loading());
}
