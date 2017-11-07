import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  private _user = {};

  constructor() {

  }

  public setProfile(profile) {
    this._user = {
      email: profile.login,
      name: `${profile.firstName} ${profile.lastName}`,
      timeZone: profile.timeZone
    }
  }

  get user() {
    return this._user;
  }
}
