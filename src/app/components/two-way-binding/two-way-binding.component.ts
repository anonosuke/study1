import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

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
