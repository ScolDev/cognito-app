import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
