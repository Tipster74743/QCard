import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login.component";
import { UserService } from "../../services/userService";

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public userService: UserService,
              public oauthService: OAuthService) {
  }

  logout() {
    this.oauthService.logOut();
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }

  get user() {
    return this.userService.user;
  }
}
