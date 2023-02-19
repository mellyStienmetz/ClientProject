import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Child } from '../models/Child';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
 
  constructor(private http:HttpClient) {  }
    
  //   baseRouteUrl = `${environment.baseUrl}/Child`

  // getAllChild() {
  //   return this.http.get<Child[]>(`${this.baseRouteUrl}/getAllChild`);
  // }
  // getChildById(id:number) {
  //   return this.http.get<Child>(`${this.baseRouteUrl}/getChildById/${id}`);
  // }
  // addChild(child:Child) {
  //   return this.http.post<Child>(`${this.baseRouteUrl}/addChild`,child);
  // }
  // checkChild(child:Child) {
  //   return this.http.put<Child>(`${this.baseRouteUrl}/checkChild`, child);
  // }
}
