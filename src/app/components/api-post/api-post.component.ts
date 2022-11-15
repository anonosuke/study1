import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.css']
})
export class ApiPostComponent implements OnInit {


  constructor(private http: HttpClient, private service: ApiService) { }

  name = ""
  job = ""
  id = 0
  createdAt = ""

  ngOnInit() {
    this.service
      .apiPost('/api/users', {name: 'au',job: 'member'})
      .subscribe((response) => {
        this.name = response.name,
        this.job = response.job,
        this.id = response.id,
        this.createdAt = response.createdAt;
      });
  }
}


/* .post後anyでは無く型宣言をする場合は、後に指定の型を記載します。 */
interface Abc {
name: string,
job: string,
id : number,
createdAt : string,
}
