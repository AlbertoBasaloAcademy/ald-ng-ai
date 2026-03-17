import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly brand = signal('ALD NG AI');
  readonly allRightsReserved = signal('All rights reserved.');
  readonly year = signal(new Date().getFullYear());

  readonly copyrightText = computed(
    () => `Copyright (c) ${this.year()} ${this.brand()}. ${this.allRightsReserved()}`
  );
}
