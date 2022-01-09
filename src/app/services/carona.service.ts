import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class CaronaService {

  constructor( private http:HttpClient) { }

getCountries():Observable<any>{
  const url = "https://api.covid19api.com/countries"
  return this.http.get<any>(url)
}

covidRealTimeData(country:any):Observable<any>{
  const url = "https://api.covid19api.com/total/dayone/country"+country; 
  return this.http.get(url);
}

}
