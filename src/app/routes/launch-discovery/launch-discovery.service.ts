import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import type { Launch } from '../../core/models/launch.model';

@Injectable({ providedIn: 'root' })
export class LaunchDiscoveryService {
  readonly #httpClient = inject(HttpClient);

  getLaunches$(): Observable<Launch[]> {
    return this.#httpClient.get<Launch[]>('/api/launches');
  }

  getLaunchById$(id: string): Observable<Launch> {
    return this.#httpClient.get<Launch>(`/api/launches/${id}`);
  }
}
