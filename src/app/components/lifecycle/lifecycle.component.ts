import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
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
