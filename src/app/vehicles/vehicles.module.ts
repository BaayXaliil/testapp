import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesComponent } from './vehicles.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { DetailsComponent } from './details/details.component';
import { ClientVehiclesComponent } from './client-vehicles/client-vehicles.component';

@NgModule({
    declarations: [VehiclesComponent, DetailsComponent, ClientVehiclesComponent],
    imports: [
        CommonModule,
        VehiclesRoutingModule,
        FormsModule
    ],
    providers: []
})
export class VehiclesModule { }
