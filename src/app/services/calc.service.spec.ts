import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  let calc: CalcService;
  let shared: SharedService;

  beforeEach(() => {
    console.log("BeforeEach is called")
   // shared = new SharedService();
   // calc = new CalcService(shared);
    // Instead of manually creating an instance of the services, we can use TEstBed apis that, through Dependency Injection,
    // declare and inject classes for us:
    // TestBed.configureTestingModule({
    //   providers:[CalcService,SharedService]
    // });
    //Even better, we can declare instance also of spyObjects:
    shared = jasmine.createSpyObj("SharedService",["logFunction"]);
    TestBed.configureTestingModule({
      providers:[CalcService,{
        provide: SharedService, useValue: shared
      }]
    });
    calc = TestBed.inject(CalcService);
    shared = TestBed.inject(SharedService);
  });

  // it('should multiply two numbers', () => {
  //   const result = service.multiply(3,5);
  //   expect(result).toBe(15);
  // });
  it("should multiply but still showing the service instance output",() => {
    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.multiply(3,5);
    expect(result).toBe(15);
  })
  it("should multiply with jasmine SPY object without service instance output",() => {
    // const shared = jasmine.createSpyObj("SharedService",["logFunction"]);
    // const calc = new CalcService(shared);
    const result = calc.multiply(3,5);
    expect(result).toBe(15);

  })
  it("should call the shared logFunction with spyOn",() => {
    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    //spyOn(shared,"logFunction").and.callThrough();
    const result = calc.multiply(3,5);
    expect(shared.logFunction).toHaveBeenCalled();
  })
});
