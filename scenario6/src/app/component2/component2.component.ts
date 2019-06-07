import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() public message=new EventEmitter();

  child1(value){
    this.message.emit(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
