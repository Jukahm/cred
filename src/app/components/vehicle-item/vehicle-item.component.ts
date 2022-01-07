import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.interface';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss'],
})
export class VehicleItemComponent implements OnInit {
  @Input() vehicle: Vehicle;
  isChecked: boolean;
  faEdit = faEdit;

  constructor() {}

  ngOnInit(): void {}
}
