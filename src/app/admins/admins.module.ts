import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAdminComponent } from './new-admin/new-admin.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AdminsComponent, NewAdminComponent, AdminFormComponent],
    imports: [
        CommonModule,
        AdminsRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: []
})
export class AdminsModule { }
