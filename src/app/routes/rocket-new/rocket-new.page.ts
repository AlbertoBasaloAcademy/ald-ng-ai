import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
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

  readonly #formValue = signal<RocketFormValue | undefined>(undefined);

  readonly #saveResource = rxResource({
    request: () => this.#formValue(),
    loader: ({ request }) => this.#repository.save$(request!),
  });

  readonly isSaving = this.#saveResource.isLoading;
  readonly errorMessage = computed(() => {
    const err = this.#saveResource.error();
    return err ? 'Failed to save rocket. Please try again.' : null;
  });

  constructor() {
    effect(() => {
      if (this.#saveResource.value()) {
        this.#router.navigate(['/']);
      }
    });
    effect(() => {
      const err = this.#saveResource.error();
      if (err) console.error(err);
    });
  }

  onSave(formValue: RocketFormValue): void {
    this.#formValue.set(formValue);
  }
}
