import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console.log("Instance of sharedService has been created")
   }

  logFunction(){
    console.log('My shared logFunction has been called')
  }
}
