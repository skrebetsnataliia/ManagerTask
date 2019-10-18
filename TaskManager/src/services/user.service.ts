import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as env from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUSER } from 'src/interfaces/user.model';

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
}
