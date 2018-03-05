import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  getHomeText(){
    return this.http.get("/homeText")
    .map((result)=>{
      return result.json()
    })
  }
}
