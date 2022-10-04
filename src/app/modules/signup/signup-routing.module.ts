import { ConfirmSignUpComponent } from './pages/confirm-sign-up/confirm-sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MODULES_ROUTES } from 'src/app/common/routes';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent
  },
  {
    path: MODULES_ROUTES.confirm,
    component: ConfirmSignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
