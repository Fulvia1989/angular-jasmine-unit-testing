import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console.log("the shared service has been instanciated")
   }

  logFunction(){
    console.log('My shared function has been called')
  }
}
