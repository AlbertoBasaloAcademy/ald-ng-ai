import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomePage {
  readonly title = 'Available rockets';
  readonly homeService = inject(HomeService);
  readonly rockets = this.homeService.rockets;
}
