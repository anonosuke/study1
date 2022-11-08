import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycleparent',
  templateUrl: './cycleparent.component.html',
  styleUrls: ['./cycleparent.component.css']
})
export class CycleparentComponent implements OnInit {

  constructor() { }

    public parentData: number = 0;

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.parentData = event.target.value;
  }
}
