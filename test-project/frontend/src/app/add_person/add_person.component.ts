import {Component, OnInit} from '@angular/core';
import {MatSnackBar, MatDialog} from '@angular/material';

import {MatChipInputEvent} from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';
import { PersonService } from '../_services/index.service';
import { Person } from '../_models/person.model';

const COMMA = 188;

@Component({
  selector: 'app-home',
  templateUrl: './add_person.component.html',
  styleUrls: ['./add_person.component.scss']
})
export class AddPersonComponent implements OnInit {
  model: Person = <Person>{};
  startDate: Date = new Date(1990, 0, 1);
  popular_tags: any[];
  tags: any[] = [];

  separatorKeysCodes = [ENTER, COMMA];

  constructor(
    private personService: PersonService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.personService.getPopularTags().subscribe(
      res => this.popular_tags = res,
      err => console.log(err)
    );
  }

  add_tag_from_popular(tag) {
    this.tags.push(tag);
  }

  remove_tag(tag) {
    const index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
  }

  add_tag(event: MatChipInputEvent): void {
    const input = event.input,
          value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  add_person(form) {
    this.model.tags = this.tags;
    const now: any = new Date(),
          person_birthday: any = new Date(this.model.birthday);
    this.model.age = Math.floor((now - person_birthday) / 31536000000);
    this.personService.addPerson(this.model).subscribe(
      res => {
        this.snackBar.open(res.message, 'Added', {
          duration: 2000
        });
        this.dialog.closeAll();
        form.resetForm();
      },
      err => console.log(err)
    );

  }
}
