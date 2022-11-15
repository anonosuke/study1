import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient){}

  apiGet(path: any){
    const serverUrl = environment.production ? environment.apiGetUrl : 'mock-server/';
    return this.http.get(serverUrl + path);
    /* return this.thhp.get(environment.apiGetUrl + path); */
  }

  apiPost/* <T> */(path: any, parameter: object){
    return this.http.post<any>/* <T> */(environment.apiPostUrl + path, parameter)
  }

}
