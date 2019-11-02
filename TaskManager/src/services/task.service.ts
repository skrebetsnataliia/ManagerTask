import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as env from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ITask } from 'src/interfaces/task.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private  URL = "http://localhost:3000";
  constructor(private http:HttpClient) { }
  getTasks(userId:number): Observable<ITask[]>{
    return this.http.get<ITask[]>(`${this.URL}/tasks?userId=${userId}`)
   }

   updateTask(id:number, task:ITask){
     return this.http.put(`${this.URL}/tasks/${id}`, task);
   }

   deleteTask(id:number):Observable<ITask>{
     return this.http.delete<ITask>(`${this.URL}/tasks/${id}`);
   }
   createTask(task:ITask):Observable<ITask>{
    return this.http.post<ITask>(`${this.URL}/tasks`, task);
   }

}
