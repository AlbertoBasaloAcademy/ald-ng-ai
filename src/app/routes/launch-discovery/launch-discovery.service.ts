import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { API_BASE_URL } from '../../core/api.config';
import type { Launch, LaunchStatus } from '../../core/models/launch.model';
import type { Rocket } from '../../core/models/rocket.model';

type LaunchApi = Omit<Launch, 'rocketName' | 'status'> &
  Partial<Pick<Launch, 'rocketName' | 'status'>>;

@Injectable({ providedIn: 'root' })
export class LaunchDiscoveryService {
  readonly #httpClient = inject(HttpClient);

  getLaunches$(): Observable<Launch[]> {
    return forkJoin({
      launches: this.#httpClient.get<LaunchApi[]>(`${API_BASE_URL}/launches`),
      rockets: this.#httpClient.get<Rocket[]>(`${API_BASE_URL}/rockets`),
    }).pipe(
      map(({ launches, rockets }) => {
        const rocketNamesById = new Map(rockets.map((rocket) => [rocket.id, rocket.name]));
        return launches.map((launch) => this.#toLaunch(launch, rocketNamesById));
      }),
    );
  }

  getLaunchById$(id: string): Observable<Launch> {
    return this.#httpClient.get<LaunchApi>(`${API_BASE_URL}/launches/${id}`).pipe(
      switchMap((launch) => {
        if (launch.rocketName) {
          return of(this.#toLaunch(launch, new Map()));
        }

        return this.#httpClient.get<Rocket>(`${API_BASE_URL}/rockets/${launch.rocketId}`).pipe(
          map((rocket) => this.#toLaunch(launch, new Map([[rocket.id, rocket.name]]))),
          catchError(() => of(this.#toLaunch(launch, new Map()))),
        );
      }),
    );
  }

  #toLaunch(apiLaunch: LaunchApi, rocketNamesById: Map<string, string>): Launch {
    const status = this.#resolveStatus(apiLaunch.status, apiLaunch.launchDateTime);

    return {
      ...apiLaunch,
      rocketName: apiLaunch.rocketName ?? rocketNamesById.get(apiLaunch.rocketId) ?? 'Unknown rocket',
      status,
    };
  }

  #resolveStatus(status: LaunchStatus | undefined, launchDateTime: string): LaunchStatus {
    if (status) {
      return status;
    }

    const launchDate = new Date(launchDateTime);
    return launchDate.getTime() < Date.now() ? 'successful' : 'scheduled';
  }
}
