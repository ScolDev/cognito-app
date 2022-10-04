import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MODULES_ROUTES } from 'src/app/common/routes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './confirm-sign-up.component.html',
  styleUrls: ['./confirm-sign-up.component.sass']
})
export class ConfirmSignUpComponent implements OnInit {
  confirmData: any = {};
  formGroup: FormGroup;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.formGroup = new FormGroup({
      confirmCode: new FormControl('', Validators.required)
    });
  }


  ngOnInit(): void {
    const username = this.route.snapshot.queryParamMap.get('username');
    if (!username) {
      this.router.navigate([MODULES_ROUTES.signUp]);
    } else {
      this.confirmData.username = username;
    }
  }

  confirmSignUp() {
    this.confirmData.code = this.formGroup.value.confirmCode;
    this.authService.confirmSignUp(this.confirmData);
  }
}
