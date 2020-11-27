import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsComponent } from './admins.component';
import { NewAdminComponent } from './new-admin/new-admin.component';


const routes: Routes = [
    { path: '', component: AdminsComponent },
    { path: 'new-admin', component: NewAdminComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminsRoutingModule { }
