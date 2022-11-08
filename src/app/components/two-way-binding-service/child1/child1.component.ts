import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { NameService } from '../../../service/name.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private NameService: NameService,private fb: FormBuilder) { }

  ngOnInit(){

  }

  onChange1(event: any){
    this.NameService.name = event.target.value;
  }

  onChange2(event: any){
    this.NameService.favoriteNumber = event.target.value;
  }

}
