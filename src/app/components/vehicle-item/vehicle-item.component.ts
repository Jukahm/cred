import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss'],
})
export class VehicleItemComponent implements OnInit {
  @Input() vehicle: Vehicle;
  isChecked: boolean;
  faEdit = faEdit;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.vehicle = Object.assign(this.vehicle, params);
    });
  }

  navigate() {
    this.router.navigate(['/edit', this.vehicle.id]);
  }
}
