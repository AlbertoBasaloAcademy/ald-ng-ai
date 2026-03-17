import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

//import { Rocket } from '../../core/models/rocket.model';
type Rocket = {
  id: string;
  name: string;
  range: string;
  capacity: number;
};

// import { formatRocketRange } from '../../shared/utils';

// function formatRocketRange(range: string): string {
//   return range.charAt(0).toUpperCase() + range.slice(1).replace(/-/g, ' ');
// }


@Component({
  selector: 'app-rocket-detail',
  standalone: true,
  templateUrl: './rocket-detail.component.html',
  styleUrl: './rocket-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketDetailComponent {
  readonly rocket = input.required<Rocket>();

  // Labels
  readonly rangeLabel = computed(() => 'Range');
  readonly capacityLabel = computed(() => 'Capacity');
  readonly rocketIdLabel = computed(() => 'Rocket ID');
  readonly seatsUnit = computed(() => 'seats');

  readonly #range = computed(() => this.rocket().range);

  // Formatted values
  readonly formattedRange = computed(() => formatRocketRange(this.#range()));
}
