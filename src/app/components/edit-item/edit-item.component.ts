import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.interface';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { VehicleState } from 'src/app/models/state.model';
import { updateVehicle } from 'src/app/store/actions/vehicle.action';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit {
  vehicle: Vehicle;
  id: string;
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<VehicleState>,
    private state: State<VehicleState>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.vehicle = this.state
      .getValue()
      .vehicle.filter((entry) => entry.id === this.id)
      .pop();

    this.form = new FormGroup({
      marca: new FormControl(),
      modelo: new FormControl(),
      serie: new FormControl(),
      ano: new FormControl(),
      kms: new FormControl(),
      matricula: new FormControl(),
      preco: new FormControl(),
      precoB2B: new FormControl(),
      imagem: new FormControl(),
    });
  }

  onSubmit() {
    const editedVehicle: Vehicle = {
      id: this.vehicle.id,
      model: { name: '', id: this.vehicle.model.id },
      price: null,
      priceB2B: null,
      serie: { name: '', id: this.vehicle.serie.id },
      brand: { name: '', id: this.vehicle.brand.id },
      image: null,
      registerYear: null,
      kms: null,
      licensePlate: null,
    };

    editedVehicle.serie.name = this.form.value.serie;
    editedVehicle.model.name = this.form.value.modelo;
    editedVehicle.brand.name = this.form.value.marca;
    editedVehicle.kms = this.form.value.kms;
    editedVehicle.licensePlate = this.form.value.matricula;
    editedVehicle.price = this.form.value.preco;
    editedVehicle.priceB2B = this.form.value.precoB2B;
    editedVehicle.registerYear = this.form.value.ano;
    editedVehicle.image = this.form.value.imagem;
    this.store.dispatch(updateVehicle(editedVehicle));
    this.router.navigate(['/list']);
  }
}
