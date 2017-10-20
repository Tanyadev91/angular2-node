import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Person } from '../_models/person.model';

@Injectable()
export class PersonService {
    host: string;

    constructor(private http: Http) {
      this.host = environment.host;
    }

    getPopularTags() {
      return this.http.get(this.host + environment.popularTags).map((res) => res.json());
    }

    addPerson(model: Person) {
      return this.http.post(this.host + environment.person, model).map((res) => res.json());
    }

    getPersons() {
      return this.http.get(this.host + environment.person).map((res) => res.json());
    }

}
