import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import "rxjs/add/operator/map";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  // getHomeText(){
  //   return this.http.get("/homeText");
  // }

  login(credentials:any){
    return this.http.post("/admin/login", credentials)
  }
}
