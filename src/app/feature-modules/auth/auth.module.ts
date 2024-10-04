import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule ,
    HttpClientModule 
  ]
})
export class AuthModule { }
