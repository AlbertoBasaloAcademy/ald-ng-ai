export type LaunchStatus = 'scheduled' | 'confirmed' | 'successful' | 'cancelled' | 'suspended';

export interface Launch {
  id: string;
  rocketId: string;
  rocketName: string;
  launchDateTime: string;
  price: number;
  minPassengers: number;
  availableSeats: number;
  status: LaunchStatus;
}
