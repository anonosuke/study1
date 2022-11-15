import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-api-get',
  templateUrl: './api-get.component.html',
  styleUrls: ['./api-get.component.css']
})
export class ApiGetComponent implements OnInit {

  constructor(private http: HttpClient, private service: ApiService) { }

  useragent=""

  ngOnInit() {
/*     this.service
      .apiGet('/user-agent')
      .subscribe((response: any) => this.useragent = response["user-agent"]); */

/*     this.http.get('https://httpbin.org/user-agent').subscribe((response: any) => console.log(response)); */

/*     this.service.apiGet('worker').subscribe((response: any) => console.log(response)) */
    this.http.get('http://localhost:8000/mock-server/worker').subscribe((response: any) => console.log(response));
  }
}
