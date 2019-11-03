import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from 'src/services/task.service';
import { ITask } from 'src/interfaces/task.model';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/services/user.service';
import { IUSER } from 'src/interfaces/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  users=[];
  constructor(private taskServ:TaskService, private toastr:ToastrService, private userServ:UserService, private router:Router) { }
  @Input()taskName='';
  @Input()description='';
  @Input()id;
  editTask=false;
  error:string;
  updatedTask:ITask;
  createTask:ITask;
  shareTask=false;
  notShareTask=false
  idUser:number;
  email:string
  ngOnInit() {
    this.userServ.getUsers().subscribe(
      (user:IUSER[])=>{
        this.users=[];
        user.forEach(item=>{
          this.users.push(item)
        })
      }
    )
  }

  myGroup = new FormGroup({
    name: new FormControl(this.taskName, [Validators.required]),
    description: new FormControl(this.description, [Validators.required])
  });
  edit(){
    this.editTask=!this.editTask;

  }
  onSubmit(){
    this.updatedTask={
      id:this.id,
      name: this.taskName,
      description:this.description,
      userId:(JSON.parse(localStorage.getItem("user"))).id
    }
    this.taskServ.updateTask(this.id, this.updatedTask ).subscribe(
     res=>{
      this.toastr.success('Updated');
     },
     err=>{
      this.error = err.message;
      this.toastr.error(`${this.error}`);
     }
    )
    this.editTask=!this.editTask;
  }
  delete(){
    this.taskServ.deleteTask(this.id).subscribe(
      res=>{
        this.toastr.success('Task was deleted');
        window.location.reload();
       },
      err=>{
        this.error = err.message;
        this.toastr.error(`${this.error}`);
       }
    )
  }
  close(){
    window.location.reload();
    this.editTask=!this.editTask;
  }

  sendTask(id:number){
    if(id==0){
      this.notShareTask=true;
      setTimeout(()=>{this.notShareTask=false;}, 3000)
    }
    else{
      this.idUser=id;
      let Task={
        name: this.taskName,
        description:this.description,
        userId:this.idUser,
        author:(JSON.parse(localStorage.getItem("user"))).email
      }
      this.taskServ.createTask(Task).subscribe(
       res=>{
        this.toastr.success('Sent');
        this.router.navigate(['/mytasks']);
        window.location.reload();
        this.shareTask=true;
      setTimeout(()=>{this.shareTask=false;}, 3000)
       },
       err=>{
        this.error = err.message;
        this.toastr.error(`${this.error}`);
       }
      )
    }
  }
}
