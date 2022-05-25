import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee_api_url: string = 'api.localhost.com';

  constructor(private httpClient: HttpClient) { }



  createEmployee(employee: any): Observable<any> {
    return this.httpClient.post(this.employee_api_url + '/create', employee)
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.throwError(error))
      )

  }
  getEmployees(): Observable<any> {
    return this.httpClient.get(this.employee_api_url + '/read')
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.throwError(error))
      )

  }

  updateEmployee(employee: any): Observable<any> {
    return this.httpClient.get(this.employee_api_url + '/update')
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.throwError(error))
      )

  }
  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(this.employee_api_url + '/delete/{id}')
      .pipe(map((resp: any) => resp.json()),
        catchError(error => this.throwError(error))
      )

  }

  throwError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
