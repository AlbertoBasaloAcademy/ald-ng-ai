import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  standalone: true,
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent {
  readonly year = new Date().getFullYear();
}
