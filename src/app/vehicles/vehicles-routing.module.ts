import { ClientVehiclesComponent } from './client-vehicles/client-vehicles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { VehiclesComponent } from './vehicles.component';


const routes: Routes = [
    { path: '', component: VehiclesComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'client/:id', component: ClientVehiclesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VehiclesRoutingModule { }
