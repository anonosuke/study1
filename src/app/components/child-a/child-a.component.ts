import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { NameService } from '../../name.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {

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
