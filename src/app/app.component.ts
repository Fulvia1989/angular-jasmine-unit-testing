import { Component } from '@angular/core';
import { DataService } from './services/4-http/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'unit-testing';
  // constructor(private data : DataService){}

  // ngOnInit(){
  //   this.data.getAllUsers().subscribe(res => console.log(res))
  // }
}
