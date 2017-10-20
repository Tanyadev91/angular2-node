import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    host: string;
    constructor(private http: Http) {
        this.host = environment.host;
    }
    get(route: string) {
        return this.http.get(this.host + route).map((response) => {
            return response.json();
        });
    }
}
