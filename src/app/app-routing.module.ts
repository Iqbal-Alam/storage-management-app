import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'login',      component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'register',      component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
];
  
@NgModule({    
  imports: [RouterModule.forRoot(appRoutes)],    
  exports: [RouterModule]    
})    

export class AppRoutingModule { }
