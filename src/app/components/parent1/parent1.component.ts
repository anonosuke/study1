import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  constructor() { }

  public parentData: number = 0;

  onClick(event: any) {
    this.parentData = event.target.value;
  }

  public fromChildValue: number = 0;

  onReceiveEventFromChild(eventValue: number) {
    this.fromChildValue = eventValue;
  }

  changeValue() {
    console.log(this.parentData)
  }
    ngOnInit(): void {
  }
}
