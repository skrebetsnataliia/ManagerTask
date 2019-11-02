import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';
import { ITask } from 'src/interfaces/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.scss']
})
export class AllTaskComponent implements OnInit {

  constructor( private taskSer:TaskService, private router:Router) { }
  currentUser=JSON.parse(localStorage.getItem("user"));
  currentUserId=this.currentUser.id
  tasks=[];

  ngOnInit() {
      this.taskSer.getTasks(this.currentUserId).subscribe(
        (task:ITask[])=>{
          this.tasks=[];
          task.forEach(item=>{
            this.tasks.push(item)
          })
        })
  }
}
