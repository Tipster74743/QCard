import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { UserService } from "../../services/userService";
import { LoginPage } from "../login/login.component";
import { OktaService } from "../../services/oktaService";
import { HomePage } from "../home/home";

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html'
})
export class SignUpPage {
  private user = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  };

  constructor(private navCtrl: NavController,
              private oktaService: OktaService,
              private userService: UserService) {
  }

  register(): void {
    this.oktaService.register(this.user)
      .then(user => {
        this.userService.setProfile(user);
        this.navCtrl.push(HomePage);
    })
      .catch(error => {
        console.log(error);
      });
  }

  login() {
    this.navCtrl.push(LoginPage);
  }
}
