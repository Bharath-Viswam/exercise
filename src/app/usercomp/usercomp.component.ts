import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usercomp',
  templateUrl: './usercomp.component.html',
  styleUrls: ['./usercomp.component.css']
})
export class UsercompComponent implements OnInit {

  constructor( public http: HttpClient) { }

  ngOnInit() {
  }
  httpdata:any;
  onClickMe() {
      this.http.get("http://jsonplaceholder.typicode.com/users")
      .subscribe((data) => this.httpdata=data);     
  }
}
