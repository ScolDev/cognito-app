import { ReactiveFormsModule } from '@angular/forms';
import { SignUpRoutingModule } from './signup-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ConfirmSignUpComponent } from './pages/confirm-sign-up/confirm-sign-up.component';


@NgModule({
  declarations: [
    SignUpComponent,
    ConfirmSignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
