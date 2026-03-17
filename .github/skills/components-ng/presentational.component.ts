import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  Signal,
  signal,
} from '@angular/core';

//import { Rocket } from '../../core/models/rocket.model';
type Rocket = {
  id: string;
  name: string;
  range: string;
  capacity: number;
};

// import { formatRocketRange } from '../../shared/utils';

function formatRocketRange(range: string): string {
  return range.charAt(0).toUpperCase() + range.slice(1).replace(/-/g, ' ');
}


@Component({
  selector: 'app-rocket-detail',
  standalone: true,
  templateUrl: './rocket-detail.component.html',
  styleUrl: './rocket-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketDetailComponent {
  readonly rocket: InputSignal<Rocket> = input.required<Rocket>();

  // Labels
  readonly rangeLabel: Signal<string> = signal('Range');
  readonly capacityLabel: Signal<string> = signal('Capacity');
  readonly rocketIdLabel: Signal<string> = signal('Rocket ID');
  readonly seatsUnit: Signal<string> = signal('seats');

  readonly #range = computed(() => this.rocket().range);

  // Formatted values
  readonly formattedRange: Signal<string> = computed(() => formatRocketRange(this.#range()));
}
