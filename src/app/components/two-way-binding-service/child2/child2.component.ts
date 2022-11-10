import { Component, OnInit } from '@angular/core';
import { NameService } from '../../../service/name.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private NameService: NameService,) { }

  get nameInformation(){
    return `${this.NameService.name}`
  }

  get numberInformation(){
    return `${this.NameService.favoriteNumber}`
  }

  ngOnInit(): void {
  }

}
