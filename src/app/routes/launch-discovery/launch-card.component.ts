import { ChangeDetectionStrategy, Component, HostBinding, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Launch } from '../../core/models/launch.model';

@Component({
  selector: '[app-launch-card]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './launch-card.component.html',
  styleUrl: './launch-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchCardComponent {
  @HostBinding('class.launch-card')
  readonly launchCardClass = true;

  readonly launch = input.required<Launch>();

  readonly availabilityText = computed(() => {
    const availableSeats = this.launch().availableSeats;
    return availableSeats === 0 ? 'Sold out' : `${availableSeats} seats left`;
  });

  readonly minimumPassengersText = computed(() => {
    const minPassengers = this.launch().minPassengers;
    return minPassengers > 1 ? `Minimum ${minPassengers} passengers` : 'Minimum 1 passenger';
  });

  readonly formattedDate = computed(() => {
    return new Date(this.launch().launchDateTime).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  });
}
