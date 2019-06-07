import { Component, OnInit } from '@angular/core';
import { ServiceclassService } from '../serviceclass.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  data:any;
  constructor(private _service : ServiceclassService) { }

  ngOnInit() {
    this._service.sharedData.subscribe(data=>{this.data=data});
  }

}
