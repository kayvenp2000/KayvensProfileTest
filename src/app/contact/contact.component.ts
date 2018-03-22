import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { AuthService } from '../_services/auth/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactContent: any;

  title = 'Kayvens Profile';
  bodyClass = 'blue-body';
  newMsg:any;
  email: string;
  firstName: string;
  lastname: string;
  message: string;
  messages: any;
  userMessage:string;



  constructor(private dataService:AuthService) {
   }

  ngOnInit() {
  }

  onSubmit(){
    this.newMsg = {
      name: this.firstName,
      message: this.userMessage
      
    }

    this.dataService.sendMessage(this.newMsg)
      .subscribe(message => this.messages.push(message))

  } 

}

