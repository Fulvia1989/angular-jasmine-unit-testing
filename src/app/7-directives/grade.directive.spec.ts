import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GradeDirective } from './grade.directive';
import { HomeComponent } from '../home/home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { GradePipe } from '../6-pipes/grade.pipe';

describe('GradeDirective', () => {
  let component: HomeComponent;
  let fixture:  ComponentFixture<HomeComponent>;
  let el:DebugElement;

  beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
      declarations: [HomeComponent, GradeDirective, GradePipe]
    })

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create an instance', () => {
    let mockElRef = {
      nativeElement: document.createElement('p')
    }
    const directive = new GradeDirective(mockElRef);
    expect(directive).toBeTruthy();
  });

  it('should change the text color on mouseover',()=>{
    let divs = el.queryAll(By.css('div'));
    let p0 = divs[0];
    let p1 = divs[1];
    let p2 = divs[2];
    let p3 = divs[3];
    let p4 = divs[4];

    p0.triggerEventHandler('mouseenter',{});
    fixture.detectChanges();
    expect(p0.nativeElement.style.color).toBe('green');

    p2.triggerEventHandler('mouseenter',{});
    fixture.detectChanges();
    expect(p2.nativeElement.style.color).toBe('blue');
  })
});
