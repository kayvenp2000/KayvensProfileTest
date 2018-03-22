import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { HttpClient } from '@angular/common/http';

var localstorage = window.localStorage;

class Credentials {
  email: string;
  password: string;
}

interface ServerResponse {
  type: boolean;
  data: any;
  token: any;

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials: Credentials;
  auth

  ngOnInit(){
    this.credentials = new Credentials();
  }
  

  constructor(private dataService: DataService, private router: Router) { }



  onSubmit() {
    this.auth.login(this.credentials)
      .subscribe((res: ServerResponse) => {
        console.log(res);
        if (res.type === true) {
          console.log('Welcome!');
          console.log(res.token);
          localStorage.setItem('authorization', res.token);
          this.credentials.email = "";
          this.credentials.password = "";
          this.router.navigateByUrl('Home');
        } else if (this.credentials.email != 'asarelc@gmail.com') {
          alert('Nah kiddo, wrong email!');
        } else if (this.credentials.password != 'wu4azare') {
          alert ('Nah kiddo, wrong password!');
          console.log(res.data);
        }  
      }, (err) => {
        console.log(err);
        console.log(this.credentials);
      });
  }

}
