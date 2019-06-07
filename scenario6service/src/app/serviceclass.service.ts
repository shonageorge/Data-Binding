import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class ServiceclassService {

  sharedData:any=new Subject();
  constructor() { 

  }
}
