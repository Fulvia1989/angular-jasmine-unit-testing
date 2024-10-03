import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(
    private shared : SharedService
  ) { }

  add(a:number,b:number){
    this.shared.logFunction();
    return a+b;
  }
}
