import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { HomePage } from "../home/home";
import { UserService } from "../../services/userService";
import { SignUpPage } from "../signup/signup.component";

declare const OktaAuth: any;

@Component({
  selector: 'login-page',
  templateUrl: 'login.component.html'
})
export class LoginPage {
  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private error: string;

  constructor(private navCtrl: NavController,
              private oauthService: OAuthService,
              private userService: UserService) {
    this.oauthService.redirectUri = window.location.origin;
    this.oauthService.clientId = '0oacp6bqcuKGhlgzh0h7';
    this.oauthService.scope = 'openid profile email';
    this.oauthService.oidc = true;
    this.oauthService.issuer = 'https://dev-582651.oktapreview.com';
  }

  login(): void {
    this.oauthService.createAndSaveNonce().then(nonce => {
      const authClient = new OktaAuth({
        clientId: this.oauthService.clientId,
        redirectUri: this.oauthService.redirectUri,
        url: this.oauthService.issuer
      });
      authClient.signIn({
        username: this.username,
        password: this.password
      }).then((response) => {
        if (response.status === 'SUCCESS') {
          this.userService.setProfile(response.user.profile);
          authClient.token.getWithoutPrompt({
            nonce: nonce,
            responseType: ['id_token', 'token'],
            sessionToken: response.sessionToken,
            scopes: this.oauthService.scope.split(' ')
          })
            .then((tokens) => {
              localStorage.setItem('access_token', tokens[1].accessToken);
              this.oauthService.processIdToken(tokens[0].idToken, tokens[1].accessToken);
              this.navCtrl.push(HomePage);
            })
            .catch(error => console.error(error));
        } else {
          throw new Error('We cannot handle the ' + response.status + ' status');
        }
      }).fail((error) => {
        console.error(error);
        this.error = error.message;
      });
    });
  }

  signUp() {
    this.navCtrl.push(SignUpPage);
  }

}
