import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Launch } from '../../core/models/launch.model';
import { LaunchCardComponent } from './launch-card.component';

@Component({
  selector: 'app-launch-discovery',
  standalone: true,
  imports: [LaunchCardComponent],
  templateUrl: './launch-discovery.component.html',
  styleUrl: './launch-discovery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchDiscoveryComponent {
  readonly launches = input.required<Launch[]>();
}
