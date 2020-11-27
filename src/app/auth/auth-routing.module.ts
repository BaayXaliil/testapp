import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'edit', component: EditAccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
