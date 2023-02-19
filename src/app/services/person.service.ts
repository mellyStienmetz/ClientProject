import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Child } from '../models/Child';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
currentUser=new BehaviorSubject<User>(null);
currentChild=new BehaviorSubject<Child>(null);
  constructor(private http:HttpClient) {  }
    
  baseRouteUrl = `${environment.baseUrl}/Person`
  
  // getAllUser() {
  //   return this.http.get<User[]>(`${this.baseRouteUrl}/GetAllUsers`);
  // }
  // getUserById(id:number) {
  //   return this.http.get<User>(`${this.baseRouteUrl}/GetUserById/${id}`);
  // }
  addUser(u:User) {
    return this.http.post<User>(`${this.baseRouteUrl}`,u);
  }
  // checkUser(u:User) {
  //   return this.http.put<User>(`${this.baseRouteUrl}/checkUser`, u);
  // }
}
