import { Injectable, signal } from '@angular/core';
import { Rocket } from '../../core/models/rocket.model';

@Injectable({ providedIn: 'root' })
export class RocketDetailService {
  private readonly _rockets = signal<Rocket[]>([
    {
      id: 'rk-falcon-lite',
      name: 'Falcon Lite',
      range: 'suborbital',
      capacity: 4
    },
    {
      id: 'rk-orbiter-one',
      name: 'Orbiter One',
      range: 'orbital',
      capacity: 6
    },
    {
      id: 'rk-luna-express',
      name: 'Luna Express',
      range: 'moon',
      capacity: 8
    },
    {
      id: 'rk-ares-voyager',
      name: 'Ares Voyager',
      range: 'mars',
      capacity: 10
    }
  ]);

  getRocketById(id: string): Rocket | undefined {
    return this._rockets().find(rocket => rocket.id === id);
  }
}
