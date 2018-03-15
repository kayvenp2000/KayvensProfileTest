import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeContent: any;
  constructor(private dataService:DataService) {
    //this.dataService.getHomeText().subscribe(data=>this.homeContent=data)
   }

  ngOnInit() {
  }

}
