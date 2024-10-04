import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './feature-modules/about/about.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./feature-modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./feature-modules/dashboard/dashboard.module').then(m => m.DashboardModule) },

  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // Redirect to dashboard as the default route

  { path: 'about', component: AboutComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
