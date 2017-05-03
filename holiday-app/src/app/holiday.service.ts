import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HolidayService {
  private baseUrl: string = 'https://holidayapi.com/v1/holidays?key=d0d2514d-4266-4655-9292-9eae98e10a57&country=US&year=2015';
  constructor(private http : Http){  }

 getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`,{headers: this.getHeaders()).map(res => res.json());
}
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}