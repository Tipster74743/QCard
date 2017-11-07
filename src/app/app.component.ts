import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OAuthService } from 'angular-oauth2-oidc';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login.component";
import { Page } from "ionic-angular/navigation/nav-util";
import { SignUpPage } from "../pages/signup/signup.component";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: Page;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public oauthService: OAuthService
  ) {
    if (oauthService.hasValidIdToken()) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
    }

    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home Page', component: HomePage },
      { title: 'My First List', component: ListPage },
      { title: 'Sign Up', component: SignUpPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
