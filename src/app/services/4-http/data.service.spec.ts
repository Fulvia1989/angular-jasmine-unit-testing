import { TestBed, } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { provideHttpClient } from '@angular/common/http';
import { USERS } from '../../../assets/users';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[    
        provideHttpClientTesting(),
        provideHttpClient()
      ]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users',(done) => {
    service.getAllUsers().subscribe((users:any)=> {
      expect(users).toBeTruthy();
      expect(users.length).toBe(50);
      const secondUser = users.find((user:any) => user.id === 2);
      expect(secondUser.first_name).toBe('Michail');
      done()
    });

    // const mockreq = testingController.expectOne('../../../assets/users.json');
    // expect(mockreq.request.method).toEqual('GET');
    // mockreq.flush(Object.values(USERS));
  })
});


