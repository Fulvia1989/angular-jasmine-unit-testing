import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './8-routing/info.component';

export const routes: Routes = [
  {
    path:"",redirectTo:"home", pathMatch: "full"
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"info", component:InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
