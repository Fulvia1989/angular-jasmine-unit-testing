import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from '../spy/shared.service';

describe('CalcService', () => {
  let calc: CalcService;
  let shared: SharedService;

  beforeEach(() => {
    console.log("BeforeEach is called")
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

  it('should multiply two numbers', () => {
    const result = calc.multiply(3,5);
    expect(result).toBe(15);
  });
  it('should add two numbers', () => {
    const result = calc.add(3,5);
    expect(result).toBe(8);
  });
 
});
