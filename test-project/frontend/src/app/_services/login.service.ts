import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()

export class LoginService {
  host: string = environment.host;
  constructor(
    private http: Http
  ) { }

  checkLogin() {
    this.http.get(this.host + environment.login).map(res => res.json());
  }
}
