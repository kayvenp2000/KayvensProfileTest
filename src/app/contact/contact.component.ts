import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { DataService} from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactContent: any;

  title = 'Kayvens Profile';
  bodyClass = 'blue-body';
  email: string;
  firstname: string;
  lastname: string;
  content: string;



  constructor(private dataService:DataService) {
    this.dataService.getContactText().subscribe(data=>this.contactContent=data)
   }

  ngOnInit() {
  }

}
