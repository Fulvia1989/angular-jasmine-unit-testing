import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  bntText = 'Subscribe';
  isSubscribed = false;

  subscribe(){
    this.isSubscribed = true;
    this.bntText = "Subscribed"
  }
}
