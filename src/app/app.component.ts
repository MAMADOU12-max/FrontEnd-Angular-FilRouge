import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  title = 'Tic Tac Toe';
  isAuthenticated: boolean;
  constructor() { }

  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
  //     password: [null, Validators.required]
  //   });
  // }


}


export class ToolbarBasicExample {}

