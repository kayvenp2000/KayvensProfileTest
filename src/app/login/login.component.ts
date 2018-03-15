import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

interface ServerResponse {
  type: boolean;
  data: any;

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any
  password: any
  attempts:any
  passwordStatus: any
  

  credentials:any 
  constructor(private dataService: DataService, private router: Router) { }



  onSubmit(){
    this.credentials = {"email":this.email, "password": this.password}
    console.log(this.credentials)
    this.dataService.login(this.credentials).subscribe((res:ServerResponse)=>{
      console.log(res)

      this.email = ""
      this.password = ""
      this.router.navigateByUrl('/home');
      this.passwordStatus = ""
    },(err)=>{
      console.log(err.error)
      if(err.error.data === "wrongPassword"){
        console.log("wrong password")
        this.passwordStatus = "Wrong Password"
      }else if (err.error.data === "invalidEmail"){
        console.log("wrong email")
        this.passwordStatus = "Wrong Email"
      }
    })
  }
  ngOnInit() {
  }

}
