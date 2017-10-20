import { Component } from '@angular/core';

export class Register_user{
  login: string;
  password: string;
}

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  model: Register_user = <Register_user>{};
  conf_pass: any ;
  constructor() {}

  static register(form) {
    //form.resetForm();
  }

  test() {
    this.conf_pass = new RegExp('12345');
    console.log(this.conf_pass);
  }

}
