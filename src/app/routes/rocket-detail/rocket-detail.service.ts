import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../core/api.config';
import { Rocket } from '../../core/models/rocket.model';

@Injectable({ providedIn: 'root' })
export class RocketDetailService {
  readonly #httpClient = inject(HttpClient);

  getRocketById$(id: string): Observable<Rocket> {
    return this.#httpClient.get<Rocket>(`${API_BASE_URL}/rockets/${id}`);
  }
}
