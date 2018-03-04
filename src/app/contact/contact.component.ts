import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Kayvens Profile';
  bodyClass = 'blue-body';
  email: string;
  firstname: string;
  lastname: string;
  content: string;



  constructor() { 
    

   }

  ngOnInit() {
  }

}
