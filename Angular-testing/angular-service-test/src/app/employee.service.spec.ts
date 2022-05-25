import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EmployeeService]
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Create an Employee on Service method', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    let employeeServiceMock = spyOn(service, 'createEmployee').withArgs({})
      .and.returnValue(of('mock result data'))

    service.createEmployee({}).subscribe((data) => {
      console.log("called")
      expect(data).toEqual(of('mock result data'));
    });
    expect(service.createEmployee).toHaveBeenCalled();

  });
});
