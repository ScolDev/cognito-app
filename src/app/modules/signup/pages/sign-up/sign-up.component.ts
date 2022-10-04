import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

export interface ISignUpForm {
  email: string,
  username: string,
  password: string,
  name: string
};

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private authService: AuthService) {
   this.formGroup = new FormGroup({
     email: new FormControl('', Validators.required),
     username: new FormControl('', Validators.required),
     name: new FormControl('', Validators.required),
     password: new FormControl('', Validators.required)
   })
  }

  ngOnInit(): void {
  }

  signUp() {
    const formData: ISignUpForm = this.formGroup.value;
    this.authService.signUp(formData);
  }

}
