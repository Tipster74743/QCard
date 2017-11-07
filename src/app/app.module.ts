import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { HomePage } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { SignUpPage } from "../pages/signup/signup.component";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login.component";
import { HttpModule } from "@angular/http";
import { OAuthModule } from "angular-oauth2-oidc";
import { UserService } from "../services/userService";
import { OktaService } from "../services/oktaService";
import { Camera } from "@ionic-native/camera";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    SignUpPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OAuthModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    SignUpPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    OAuthService,
    UserService,
    OktaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
