import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { VehicleReducer } from './store/reducers/vehicle.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    VehicleItemComponent,
    EditItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      vehicle: VehicleReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
