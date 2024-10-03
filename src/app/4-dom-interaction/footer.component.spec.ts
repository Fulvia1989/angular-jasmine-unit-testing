import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let el : DebugElement;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [FooterComponent]
        })
        .compileComponents();
        
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should render a button with text subscribe', () => {
        const btn = el.queryAll(By.css('button'));
        component.isSubscribed=false;
        component.bntText='Subscribe';
        //fixture.detectChanges();
        expect(btn[0].nativeElement.textContent).toBe('Subscribe');
        expect(btn[0].nativeElement.disabled).toBeFalse();
    });
    it('should render a button with text subscribed and button should be disabled after click', () => {
        const btn = el.queryAll(By.css('button'));
        component.isSubscribed=false;
        component.bntText='Subscribe';
        btn[0].nativeElement.click();
        fixture.detectChanges();
        expect(btn[0].nativeElement.textContent).toBe('Subscribed');
        expect(btn[0].nativeElement.disabled).toBeTrue();
    });





})
