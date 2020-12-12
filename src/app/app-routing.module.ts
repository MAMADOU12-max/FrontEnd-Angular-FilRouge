import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormateurComponent} from './formateur/formateur.component';
import {AdminComponent} from './admin/admin.component';
import {CMComponent} from './cm/cm.component';

const routes: Routes = [
  {path: '', component: LoginComponent} ,
  {path: 'formateur', component: FormateurComponent} ,
  {path: 'admin', component: AdminComponent} ,
  {path: 'cm', component: CMComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
