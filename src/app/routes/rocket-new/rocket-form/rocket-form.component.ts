import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { RocketRange } from '../../../core/models/rocket.model';
import type { RocketFormValue } from '../rocket-new.model';

@Component({
  selector: 'app-rocket-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  templateUrl: './rocket-form.component.html',
  styleUrl: './rocket-form.component.css',
})
export class RocketFormComponent {
  readonly disabled = input(false);
  readonly save = output<RocketFormValue>();

  readonly ranges: RocketRange[] = ['suborbital', 'orbital', 'moon', 'mars'];

  readonly name = signal('');
  readonly range = signal<RocketRange>('suborbital');
  readonly capacity = signal(1);

  onSubmit(): void {
    this.save.emit({
      name: this.name(),
      range: this.range(),
      capacity: this.capacity(),
    });
  }
}
