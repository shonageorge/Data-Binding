import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Output() public message3 = new EventEmitter;

  childEvent3(value){
    this.message3.emit(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
