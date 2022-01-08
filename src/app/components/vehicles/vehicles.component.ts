import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { Store, State } from '@ngrx/store';
import { VehicleState } from 'src/app/models/state.model';
import { addVehicles } from 'src/app/store/actions/vehicle.action';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  vehicles$: Vehicle[];

  constructor(
    private vehicleService: VehicleService,
    private store: Store<VehicleState>,
    private state: State<VehicleState>
  ) {}

  ngOnInit(): void {
    this.populateVehicles();
  }

  populateVehicles() {
    this.vehicleService.getVehicles().subscribe((data) => {
      data._embedded.results.map((entry) => {
        const vehicle: Vehicle = {
          id: entry.index_id,
          model: entry.object.model,
          price: entry.object.price,
          priceB2B: entry.object.price_b2b,
          serie: entry.object.serie,
          brand: entry.object.brand,
          image: entry.object.images[0].url,
          registerYear: entry.object.register_year,
          kms: entry.object.kms,
          licensePlate: entry.object.license_plate,
        };
        this.store.dispatch(addVehicles(vehicle));
      });
      this.vehicles$ = this.state.getValue().vehicle;
    });
  }
}
