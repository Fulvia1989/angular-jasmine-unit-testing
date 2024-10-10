import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './4-dom-interaction/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './5-promises/counter/counter.component';
import { GradePipe } from './6-pipes/grade.pipe';
import { GradeDirective } from './7-directives/grade.directive';
import { InfoComponent } from './8-routing/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CounterComponent,
    GradePipe,
    GradeDirective,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
