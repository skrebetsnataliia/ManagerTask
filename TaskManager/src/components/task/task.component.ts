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
  shareTask=true;
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
    name: new FormControl(this.taskName, [Validators.required, Validators.maxLength(25)]),
    description: new FormControl(this.description, [Validators.required, Validators.maxLength(300)])
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
      this.shareTask=false;
      setTimeout(()=>{this.shareTask=true;}, 5000)
    }
    else{
      this.idUser=id;
    }
  }

  send(){
    let Task={
      name: this.taskName,
      description:this.description,
      userId:this.idUser,
      author:(JSON.parse(localStorage.getItem("user"))).email
    }
    console.log(Task);
    this.taskServ.createTask(Task).subscribe(
     res=>{
      this.toastr.success('Sent');
      this.router.navigate(['/mytasks']);
     },
     err=>{
      this.error = err.message;
      this.toastr.error(`${this.error}`);
     }
    )
  }
}
