import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestWebService {
  constructor() { }
   
   randomInteger(min:number, max:number):Observable<any>  {
     return  of([(Math.floor(Math.random() * (max - min + 1)) + min),(Math.floor(Math.random() * (max - min + 1)) + min),(Math.floor(Math.random() * (max - min + 1)) + min)]);
  }

  
}
