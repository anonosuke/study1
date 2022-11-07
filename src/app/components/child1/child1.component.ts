import { outputAst } from '@angular/compiler';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit {
  @Input() num: number = 0;

  @Output() outputEvent = new EventEmitter<number>();

  constructor() { }

  onkeyup(event: any) {
    this.outputEvent.emit(event.target.value);
  }

  ngOnInit(): void {
  }

}
