import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { Router, RouterModule } from "@angular/router";
import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./8-routing/info.component";
import { GradePipe } from "./6-pipes/grade.pipe";
import { GradeDirective } from "./7-directives/grade.directive";
import { Location } from '@angular/common';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("App Routing",()=>{
    let router: Router;
    let fixture : ComponentFixture<AppComponent>;
    let homeFixture: ComponentFixture<HomeComponent>;
    let infoFixture: ComponentFixture<InfoComponent>;
    let location: Location;
    let el:DebugElement;
    let btnEl:DebugElement;

    beforeEach(waitForAsync(()=>{
        TestBed.configureTestingModule({
            imports:[RouterModule.forRoot(routes)],
            declarations:[AppComponent,HomeComponent,InfoComponent,GradePipe,GradeDirective]
        }).compileComponents();
    }));

    beforeEach(()=>{
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        router.initialNavigation();
        fixture = TestBed.createComponent(AppComponent);
        homeFixture = TestBed.createComponent(HomeComponent);
        infoFixture = TestBed.createComponent(InfoComponent);
        el = homeFixture.debugElement;
        btnEl = infoFixture.debugElement;
    });

    it("should navigate to the default path = home",waitForAsync(()=>{
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            expect(location.path()).toBe('/home');
        });
    }))
    it("should navigate to info on clicking the link in home component",waitForAsync(()=>{
        homeFixture.detectChanges();
        let links = el.queryAll(By.css('a'));
        links[0].nativeElement.click();
        homeFixture.whenStable().then(()=>{
            expect(location.path()).toBe('/info');
        });
    }))
    it("should navigate to home on clicking the button in info component",waitForAsync(()=>{
        infoFixture.detectChanges();
        let links = el.queryAll(By.css('button'));
        links[0].nativeElement.click();
        homeFixture.whenStable().then(()=>{
            expect(location.path()).toBe('/home');
        });
    }))
})