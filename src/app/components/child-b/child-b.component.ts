import { Component, OnInit } from '@angular/core';
import { NameService } from '../../name.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {

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
