import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-api-get',
  templateUrl: './api-get.component.html',
  styleUrls: ['./api-get.component.css']
})
export class ApiGetComponent implements OnInit {

  constructor(private http: HttpClient) { }

  useragent = "";

  ngOnInit() {
    this.http
      .get("https://httpbin.org/user-agent")
      .subscribe((response: any) => this.useragent = response["user-agent"]);
  }

}
