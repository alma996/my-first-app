import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';





@Injectable({// pravi injectable kako se ne bi kopitao kod  pravi se sa (ng g s ime)
  //nakon ovog ukljucuje employe service u app modul
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }//http request

  getEmployees() : Observable<IEmployee[]>{ // pravi listu kako bi izbacio is list i detail component kako s ene bi kopirao i ponavlja kod
    /* Prvi nacin bez http requesta return[
      {"id":1, "name": "Alma", "age": 23},
    {"id":2, "name": "Armin", "age": 26},
    {"id":3, "name": "Alma2", "age": 25},
    {"id":4, "name": "Armin2", "age": 27}
    ]*/

    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandeler));
    
  }

  errorHandeler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
    
  }
  
  
}
