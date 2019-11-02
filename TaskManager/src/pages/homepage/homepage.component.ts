import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { ITask } from 'src/interfaces/task.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private taskSer:TaskService) { }
  currentUser=JSON.parse(localStorage.getItem("user"));
  currentUserId=this.currentUser.id
  tasks=[];

  ngOnInit() {
    this.taskSer.getTasks(this.currentUserId).subscribe(
      (task:ITask[])=>{
        this.tasks=[];
        task.forEach(item=>{
          if(item.author==undefined){
            this.tasks.push(item)
          }
        })
      }
    )
  }
 logout(){
      localStorage.clear();
    }

}
