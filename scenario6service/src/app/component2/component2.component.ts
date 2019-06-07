import { Component, OnInit } from '@angular/core';
import { ServiceclassService } from '../serviceclass.service';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

public msg;

  constructor(private _service:ServiceclassService) { }

  ngOnInit() {
  }

  onClick(value){
    this._service.sharedData.next(value);
    this.msg=value;
  }
}
