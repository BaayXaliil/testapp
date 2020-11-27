import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'admins', loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule)
  },
  {
    path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
