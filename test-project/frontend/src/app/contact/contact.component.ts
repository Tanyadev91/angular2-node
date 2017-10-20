import { Component, OnInit } from '@angular/core';
import { PersonService } from '../_services/index.service';
import { Person } from '../_models/person.model';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  list: Person[];
  constructor(
    private personService: PersonService
  ) {}

  ngOnInit() {
    this.personService.getPersons().subscribe(res => this.list = res);
  }
}
