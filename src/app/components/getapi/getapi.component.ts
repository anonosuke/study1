import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css']
})
export class GetapiComponent implements OnInit {

  constructor(private http: HttpClient) { }

  useragent = "";

  ngOnInit() {
    this.http
      .get("https://httpbin.org/user-agent")
      .subscribe((response: any) => this.useragent = response["user-agent"]);
  }

}
