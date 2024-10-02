import { Injectable } from '@angular/core';
import { SharedService } from '../spy/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private shared : SharedService) { }

  multiply(a:number,b:number){
    this.shared.logFunction();
    return a*b;
  }
  add(a:number,b:number){
    this.shared.logFunction();
    return a+b;
  }
}
