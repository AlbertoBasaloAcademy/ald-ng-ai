import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Rocket } from '../../core/models/rocket.model';
import { RocketCardComponent } from './rocket-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RocketCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly title = input.required<string>();
  readonly rockets = input.required<Rocket[]>();

  readonly rangeLabel = 'Range';
  readonly capacityLabel = 'Capacity';
  readonly seatsLabel = 'seats';
  readonly createRocketLabel = 'Create new rocket';
  readonly createRocketHref = '/rockets/new';
}
