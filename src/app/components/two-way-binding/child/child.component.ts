import { outputAst } from '@angular/compiler';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() num: number = 0;

  @Output() outputEvent = new EventEmitter<number>();

  constructor() { }

  onkeyup(event: any) {
    this.outputEvent.emit(event.target.value);
  }

  ngOnInit(): void {
  }

}
