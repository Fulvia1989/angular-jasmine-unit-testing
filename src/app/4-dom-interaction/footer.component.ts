import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  bntText = 'Subscribe';
  isSubscribed = false;

  subscribe(){
    setTimeout(()=>{
      this.bntText = "Subscribed"
      this.isSubscribed = true;

    },2000)
  }
}
