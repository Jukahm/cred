import { createReducer, on } from '@ngrx/store';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { VehicleService } from 'src/app/services/vehicle.service';
import {
  getVehicles,
  addVehicles,
  updateVehicle,
} from '../actions/vehicle.action';

const initialState: Vehicle[] = [];
export const VehicleReducer = createReducer(
  initialState,
  on(getVehicles, (state) => [...state]),
  on(addVehicles, (state, vehicle) => [...state, vehicle]),
  on(updateVehicle, (state, vehicle) => {
    const newState = state.map((vehicleState) => {
      if (vehicleState.id !== vehicle.id) return vehicleState;
      return { ...vehicle };
    });
    return [...newState];
  })
);
