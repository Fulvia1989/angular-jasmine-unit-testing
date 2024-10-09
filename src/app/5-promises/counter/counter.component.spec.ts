import { ComponentFixture, fakeAsync, TestBed,flush, tick, flushMicrotasks } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { delay, of } from 'rxjs';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test the promise',fakeAsync(() =>{
    //NOTE: test always separate main and tasks in two different queues. Once the main queue is cleared, the other one starts.
    // Tasks can be of type micro or macro, and are separated in two different queues, on wich the microtasks one always has precedence.;
    // so macrotasks, such as setTimeout, must wait for all the microtasks to be executed first.
    let counter = 0;

    setTimeout(()=>{
      console.log('First timeout')
      counter+=2;
    },2000);

    setTimeout(()=>{
      console.log('second timeout')

      counter+=3;
    },3000);

    Promise.resolve().then(()=>{
      console.log('Promise (microtask) is executed before all timeouts (macrotasks)');

      counter++;
    });
    //flush();
    flushMicrotasks(); //executest all the microtasks
    expect(counter).toBe(1);

    tick(2000);
    expect(counter).toBe(3);

    tick(3000);
    expect(counter).toBe(6);

  }));

  it('should test an observable', fakeAsync(() =>{
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(delay(1000));
    myObs.subscribe(()=>{
      isSubscribed = true;
    });
    tick(1000)
    expect(isSubscribed).toBeTrue();
    
  }));
});
