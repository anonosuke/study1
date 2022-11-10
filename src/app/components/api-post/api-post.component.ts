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

  ngOnInit() {
    this.http
      .post<any>('https://reqres.in/api/users', {
        name: "au",
        job: "member"
      })
      .subscribe((response) => {
        this.service.name = response.name,
        this.service.job = response.job,
        this.service.id = response.id,
        this.service.createdAt = response.createdAt;
      });
  }

  get name(){
    return `${this.service.name}`
  }

  get job(){
    return `${this.service.job}`
  }

  get id(){
    return `${this.service.id}`
  }

  get createdAt(){
    return `${this.service.createdAt}`
  }
}



/*
.post後anyでは無く方宣言をする場合は、後に指定の型を記載します。
interface Abc {
name: string,
job: string,
id : number,
createdAt : string
} */
