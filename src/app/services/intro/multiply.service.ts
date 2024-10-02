import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplyService {

  constructor() { }

  multiply(a:number,b:number){
    return a*b;
  }
}
