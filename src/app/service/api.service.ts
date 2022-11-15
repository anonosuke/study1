import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient){}

  apiGet(path: any){
    return this.http.get(environment.apiGetUrl + path);
  }

  apiPost/* <T> */(path: any, parameter: object){
    return this.http.post<any>/* <T> */(environment.apiPostUrl + path, parameter)
  }
}
