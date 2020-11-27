import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from '../template/sidebar/sidebar.component';
import { FooterComponent } from '../template/footer/footer.component';


@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [],
    exports: [HomeComponent]
})
export class HomeModule { }
