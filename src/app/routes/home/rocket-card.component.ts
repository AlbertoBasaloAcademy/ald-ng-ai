import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Rocket } from '../../core/models/rocket.model';

@Component({
  selector: '[app-rocket-card]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rocket-card.component.html',
  styleUrl: './rocket-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RocketCardComponent {
  @HostBinding('class.rocket-card')
  readonly rocketCardClass = true;

  readonly rocket = input.required<Rocket>();
  readonly rangeLabel = input.required<string>();
  readonly capacityLabel = input.required<string>();
  readonly seatsLabel = input.required<string>();
}
