import { MODULES_ROUTES } from './../common/routes';
import { Amplify } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISignInForm } from '../modules/signin/pages/sign-in/sign-in.component';
import { ISignUpForm } from '../modules/signup/pages/sign-up/sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
    Amplify.configure({
      "aws_project_region": "",
      "aws_cognito_identity_pool_id": "",
      "aws_cognito_region": "",
      "aws_user_pools_id": "",
      "aws_user_pools_web_client_id": ""
    });
  }

  signIn(formData: ISignInForm) {
    Auth.signIn(formData.username, formData.password) .then(result => {
        this.router.navigate([MODULES_ROUTES.home]);
      }).catch(err => console.error);
  }

  signUp(formData: ISignUpForm) {
    const signUpParams = {
      username: formData.username,
      password: formData.password,
      attributes: {
        email: formData.email,
        name: formData.name,
        updated_at: '' + Date.now()
      },
    }

    Auth.signUp(signUpParams)
      .then(result => {
        console.log('signup', result);
        this.router.navigate([
          MODULES_ROUTES.signUp,
          MODULES_ROUTES.confirm
        ], {
          queryParams: {
            username: signUpParams.username
          }
        });
      }).catch(err => console.error);
  }

  confirmSignUp(confirmData: any) {
    Auth.confirmSignUp(confirmData.username, confirmData.code)
      .then((result) => {
        this.router.navigate([MODULES_ROUTES.signIn]);
      })
  }

  signOut() {
    Auth.signOut()
      .then(result => {
        this.router.navigate([MODULES_ROUTES.signIn]);
      }).catch(err => console.error);
  }

  currentAuthenticatedUser() {
    return Auth.currentAuthenticatedUser();
  }
}