import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../core/api.config';
import type { Rocket } from '../../core/models/rocket.model';
import type { RocketFormValue } from './rocket-new.model';

@Injectable({ providedIn: 'root' })
export class RocketNewRepository {
  readonly #httpClient = inject(HttpClient);

  save$(rocket: RocketFormValue): Observable<Rocket> {
    return this.#httpClient.post<Rocket>(`${API_BASE_URL}/rockets`, rocket);
  }
}
