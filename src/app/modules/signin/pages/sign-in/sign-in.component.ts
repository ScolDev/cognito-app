import { AuthService } from '../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface ISignInForm {
  username: string,
  password: string
};

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private authService: AuthService) {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  signIn() {
    const formData: ISignInForm = this.formGroup.value;

    this.authService.signIn(formData);
  }

}
