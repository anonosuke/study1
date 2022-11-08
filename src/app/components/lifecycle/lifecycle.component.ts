import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() { }

    public parentData: number = 0;

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.parentData = event.target.value;
  }
}
