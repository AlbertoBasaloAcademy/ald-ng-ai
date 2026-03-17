export type RocketRange = 'suborbital' | 'orbital' | 'moon' | 'mars';

export interface Rocket {
  id: string;
  name: string;
  range: RocketRange;
  capacity: number;
}
