import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/models/vehicle.interface';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [];
  dataFile: any = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(
      (data) =>
        (this.vehicles = data._embedded.results.map((entry) => ({
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
        })))
    );
    console.log(this.vehicles);
  }
}
