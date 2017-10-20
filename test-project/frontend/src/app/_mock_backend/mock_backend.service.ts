import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { environment } from '../../environments/environment';
import { popular_tags } from '../../assets/mocks/popular_tags';


export function fakeBackendFactory (backend: MockBackend, options: BaseRequestOptions) {
  const storage = window.localStorage;
  backend.connections.subscribe((c: MockConnection) => {

    // get popular tags
    if (c.request.url === `${environment.host}${environment.popularTags}` && c.request.method === 0) {
      c.mockRespond(new Response(new ResponseOptions({
        body: popular_tags
      })));
    }

    // add person
    if (c.request.url === `${environment.host}${environment.person}` && c.request.method === 1) {
      const data = JSON.parse(c.request.getBody()),
            name = `${data.name} ${data.surname}`;
      let persons = JSON.parse(storage.getItem('persons')) || [];
      persons.push(data);
      persons = JSON.stringify(persons);
      storage.setItem('persons', persons);
      c.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(name)
      })));
    }

    // get persons
    if (c.request.url === `${environment.host}${environment.person}` && c.request.method === 0) {
      const data = storage.getItem('persons');
      c.mockRespond(new Response(new ResponseOptions({
        body: JSON.parse(data)
      })));
    }

  });
  return new Http(backend, options);
}


export let fakeBackendProvider = {
  provide: Http,
  useFactory: fakeBackendFactory ,
  deps: [MockBackend, BaseRequestOptions]
};
