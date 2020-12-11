import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../Services/user.service';
import * as jwt_decode from "jwt-decode";
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  username: string ;
  formSignup: FormGroup ;
  submitted = false;
  hide = true;


  constructor(private userService: UserService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      username: ['', [ Validators.required]],
      password: ['', [Validators.required]]
    }) ;
  }



  get f() {
    return this.formSignup.controls ;
  }

  onFormSubmit() {
     this.submitted = true ;
     if (this.formSignup.invalid) {
      return;
     }
    this.userService.Authentification(this.password, this.username).subscribe(data => {
      console.log(data)
    }, error => console.log(error)) ;
  }




  //
  // getErrorMessage() {
  //   if (this.username.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this.username.hasError('email') ? 'Not a valid email' : '';
  // }
}
