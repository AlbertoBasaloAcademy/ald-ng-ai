import type { RocketRange } from '../../core/models/rocket.model';

export type RocketFormValue = {
  name: string;
  range: RocketRange;
  capacity: number;
};
