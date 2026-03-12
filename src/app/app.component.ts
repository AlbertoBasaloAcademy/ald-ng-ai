import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './cabecera.component';
import { PieComponent } from './pie.component';

@Component({
  selector: 'app-root',
  imports: [CabeceraComponent, RouterOutlet, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'astro-bookings';
}
