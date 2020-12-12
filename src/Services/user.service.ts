import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UserModal} from '../modals/UserModal';
import * as jwt_decode from "jwt-decode";
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UrlEnv = environment.Url_base;
  tokenDecoded: string ;
  //  teams$ = this.http.get('UrlEnv/users');
  helper = new JwtHelperService() ;

  constructor(private http: HttpClient, private router: Router) {

  }

  //connexion
  Authentification(password: string, username: string) {
     return  this.http.post(this.UrlEnv+"/login",{
         username, password
      }).pipe(
            map((response: any) => {
                this.tokenDecoded = this.helper.decodeToken(response.token) ;

                if (this.tokenDecoded['roles'] == "ROLE_FORMATEUR") {
                  this.router.navigate(['formateur']) ;
                } else if (this.tokenDecoded['roles'] == "ROLE_ADMIN") {
                  this.router.navigate(['admin']) ;
                }else if (this.tokenDecoded['roles'] == "ROLE_CM") {
                  this.router.navigate(['cm']) ;
                }
            })
     );
  }


}
