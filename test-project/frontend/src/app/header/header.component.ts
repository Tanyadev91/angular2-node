import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPersonComponent } from '../add_person/add_person.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private dialog: MatDialog
  ) { }

  open_add_person_dialog = () => this.dialog.open(AddPersonComponent);

  open_login_dialog = () => this.dialog.open(LoginComponent);

}
