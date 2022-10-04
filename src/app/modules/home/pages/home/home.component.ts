import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  name: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadUserInformation();
  }

  signOut() {
    this.authService.signOut();
  }

  async loadUserInformation() {
    const user = await this.authService.currentAuthenticatedUser();
    this.name = user.attributes.name;
  }
}
