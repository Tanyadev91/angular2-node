import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

@Injectable()
export class TestService {
    constructor(
        private httpService: HttpService
    ) { }
    public getLiastAny() {
     return this.httpService.get(environment.anyList);
    }
}