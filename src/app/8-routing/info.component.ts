import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  constructor(
    private router: Router
  ){}

  goBack(){
    this.router.navigate(['/home']);
  }
}
