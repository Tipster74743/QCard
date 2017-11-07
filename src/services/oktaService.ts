import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class OktaService {
  private loginUrl: string = 'https://dev-582651.oktapreview.com/api/v1/users';
  private api_token: string = '00vItzY3IBjxRz7v_g-1vYGKLXFidQKF9tUYbqni5c';


  constructor(private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  register(userData) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `SSWS ${this.api_token}`);

    let body = {
      "profile": {
        "firstName": userData.firstName,
        "lastName": userData.lastName,
        "email": userData.email,
        "login": userData.email,
        "mobilePhone": userData.phone
      },
      "credentials": {
        "password": {
          "value": userData.password
        }
      }
    };

    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.loginUrl, body, options)
      .toPromise()
      .then(response => response.json().profile)
      .catch(this.handleError)
  }
}
