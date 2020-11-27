import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
    declarations: [ServicesComponent, DetailComponent],
    imports: [
        CommonModule,
        ServicesRoutingModule
    ],
    providers: []
})
export class ServicesModule { }
