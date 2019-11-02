import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITask } from 'src/interfaces/task.model';
import { TaskService } from 'src/services/task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskServ:TaskService, private toastr:ToastrService, private router:Router ) { }
 creatTask:ITask;
  myGroup = new FormGroup({
    name: new FormControl(" ", [Validators.required]),
    description: new FormControl(" ", [Validators.required])
  });
  error:string;

  ngOnInit() {
  }
  onSubmit(){
    const { value } = this.myGroup;
    this.creatTask={
      name: value.name,
      description:value.description,
      userId:(JSON.parse(localStorage.getItem("user"))).id
    }
    this.taskServ.createTask(this.creatTask).subscribe(
     res=>{
      this.toastr.success('Created');
      this.router.navigate(['/mytasks']);
     },
     err=>{
      this.error = err.message;
      this.toastr.error(`${this.error}`);
     }
    )
  }
}
