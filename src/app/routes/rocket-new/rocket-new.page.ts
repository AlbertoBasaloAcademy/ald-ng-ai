import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RocketNewRepository } from './rocket-new.service';
import { RocketFormComponent } from './rocket-form/rocket-form.component';
import type { RocketFormValue } from './rocket-new.model';

@Component({
  selector: 'app-rocket-new',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RocketFormComponent],
  templateUrl: './rocket-new.page.html',
  styleUrl: './rocket-new.page.css',
})
export default class RocketNewPage {
  readonly #repository = inject(RocketNewRepository);
  readonly #router = inject(Router);

  readonly title = 'New Rocket';
  readonly isSaving = signal(false);
  readonly errorMessage = signal<string | null>(null);

  onSave(formValue: RocketFormValue): void {
    this.isSaving.set(true);
    this.errorMessage.set(null);
    this.#repository.save$(formValue).subscribe({
      next: () => this.#router.navigate(['/']),
      error: (err) => {
        console.error(err);
        this.errorMessage.set('Failed to save rocket. Please try again.');
        this.isSaving.set(false);
      },
    });
  }
}
