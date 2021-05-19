import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    RegisterRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule
  ]
})
export class RegisterModule { }
