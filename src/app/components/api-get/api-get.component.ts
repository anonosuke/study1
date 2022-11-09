import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponseBase } from '@angular/common/http';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-api-get',
  templateUrl: './api-get.component.html',
  styleUrls: ['./api-get.component.css']
})
export class ApiGetComponent implements OnInit {

  constructor(private http: HttpClient, private service: ApiService) { }

  ngOnInit() {
    this.http
      .get("https://httpbin.org/user-agent")
      .subscribe((response: any) => this.service.useragent = response["user-agent"]);
  }

  get useragent(){
    return `${this.service.useragent}`
  }
}
