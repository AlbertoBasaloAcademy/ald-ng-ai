import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Rocket } from '../../core/models/rocket.model';
import { API_BASE_URL } from '../../core/api.config';

@Injectable({ providedIn: 'root' })
export class HomeService {
  readonly #httpClient = inject(HttpClient);

  readonly #rocketsResource = rxResource({
    loader: () => this.#httpClient.get<Rocket[]>(`${API_BASE_URL}/rockets`),
  });

  readonly rockets = computed(() => this.#rocketsResource.value() ?? []);
}
