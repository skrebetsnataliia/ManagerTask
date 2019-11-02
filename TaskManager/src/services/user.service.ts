import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as env from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUSER } from 'src/interfaces/user.model';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  URL = env.environment.API_URL;
  constructor(private http:HttpClient) { }
 getUserByEmail(email:string, password:string): Observable<IUSER[]>{
  console.log(this.http.get<IUSER[]>(`${this.URL}/users?email=${email}&password=${password}`));
  return this.http.get<IUSER[]>(`${this.URL}/users?email=${email}&password=${password}`)
 }

 getUserEmail(email:string): Observable<IUSER[]>{
  console.log(this.http.get<IUSER[]>(`${this.URL}/users?email=${email}`));
  return this.http.get<IUSER[]>(`${this.URL}/users?email=${email}`)
 }

 createUser(user:IUSER):Observable<IUSER>{
  return this.http.post<IUSER>(`${this.URL}/users`, user)
 }

 getUsers():Observable<IUSER[]>{
   return this.http.get<IUSER[]>(`${this.URL}/users`)
 }
}
