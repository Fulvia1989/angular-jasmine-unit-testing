import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { GradePipe } from '../6-pipes/grade.pipe';
import { GradeDirective } from '../7-directives/grade.directive';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el:DebugElement;
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [HomeComponent]
  //   })
  //   .compileComponents();
    
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(waitForAsync(
    ()=>{
      TestBed.configureTestingModule({
        declarations: [HomeComponent,GradePipe,GradeDirective]
      })
      .compileComponents().then(()=>{
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      })
    }
  ))

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have contents', () => {
    let pElements = el.queryAll(By.css('span'));
    let text = pElements[0].nativeElement.textContent;
    expect(text).toBe('home works!');
    let buttonEls = el.queryAll(By.css('.btn'));
    expect(buttonEls[0].nativeElement.disabled).toBeTrue();
    let imgEls = el.queryAll(By.css('img'));
    expect(imgEls[0].nativeElement.src).toBe('http://imgsrc.com/123');
    component.title = 'Welcome to Angular Testing';
    fixture.detectChanges();
    let titleEls = el.queryAll(By.css('.title'));
    expect(titleEls[0].nativeElement.textContent).toBe('Welcome to Angular Testing');
  });
});
