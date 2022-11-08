import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.css']
})
export class ApiPostComponent implements OnInit {


  constructor(private http: HttpClient) { }

  name = ""
  job = ""
  id = 0
  createdAt = ""

  ngOnInit() {
    this.http
      .post<any>('https://reqres.in/api/users', {
        name: "au",
        job: "member"
      })
      .subscribe((response) => {
        this.name = response.name,
        this.job = response.job,
        this.id = response.id,
        this.createdAt = response.createdAt;
      });
  }
}

/* interface Abc {
name: string,
job: string,
id : number,
createdAt : string
} */
