import { createAction, props } from '@ngrx/store';
import { Vehicle } from 'src/app/models/vehicle.interface';

export const getVehicles = createAction('[Vehicles] Get vechicle');
export const addVehicles = createAction(
  '[Vehicles] Add vehicle',
  (vehicle: Vehicle) => vehicle
);

export const updateVehicle = createAction(
  '[Vehicles]',
  (vehicle: Vehicle) => vehicle
);
