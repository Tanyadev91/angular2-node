import { Component} from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  model: any = {};
  constructor(
    private dialog: MatDialog
  ) { }

  static login(form) {
    form.resetForm();
  }

  register_dialog () {
    this.dialog.closeAll();
    this.dialog.open(RegisterComponent);
  }
}
