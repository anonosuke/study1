import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockapiService implements InMemoryDbService  {
  private api: any ={
    worker: [
      {name: 'taro',job: 'member'},
      {name: 'hana',job: 'member'}
    ]
  };

  createDb() {
    return this.api
  }
}
