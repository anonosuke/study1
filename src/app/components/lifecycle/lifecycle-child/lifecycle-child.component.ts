import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';
@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit {

  constructor() { }

  @Input() num: number = 0;
//ライフサイクル順になっています
  ngOnChanges() {
    alert("ngOnChanges");
  }

  ngOnInit() {
    alert("ngOnInit");
  }

  ngDoCheck() {
    alert("ngDoCheck");
  }

  ngAfterContentInit() {
    alert("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    alert("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    alert("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    alert("ngAfterViewChecked");
  }

  ngOnDestroy() {
    alert("ngOnDestroy");
  }
}
