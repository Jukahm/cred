import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.interface';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [
    {
      id: 'jR9v5',
      serie: {
        name: '1.2 TurboCE GPS Dynamique S 100Cv',
        id: 'a342-d3r3',
      },
      model: {
        name: 'Clio Break',
        id: 'vPqj',
      },
      brand: {
        name: 'Renault',
        id: '9M',
      },
      registerYear: 2010,
      kms: 131000,
      licensePlate: '00-00-00',
      price: 6850,
      priceB2B: 6850,
      image:
        'https://static.piscapisca.pt/custom/companies/company_BEb/stand_p8Q/vehicle_jR9v5/12f73f83-b900-4785-bcdc-4100016978f6.jpg',
    },
    {
      id: '4rt4y',
      serie: {
        name: 'Teste Sirjciv',
        id: '1242-3432',
      },
      model: {
        name: 'Teste teste',
        id: 'Nbfr',
      },
      brand: {
        name: 'Renault',
        id: '10M',
      },
      registerYear: 2020,
      kms: 10000,
      licensePlate: 'A1-20-CR',
      price: 12300,
      priceB2B: 11000,
      image:
        'https://static.piscapisca.pt/custom/companies/company_BEb/stand_p8Q/vehicle_jR9v5/12f73f83-b900-4785-bcdc-4100016978f6.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
