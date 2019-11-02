import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/services/user.service';
import { Route, Router } from '@angular/router';
import { IUSER } from 'src/interfaces/user.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router, private toastr: ToastrService) { }
  myGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });
  show=false;
  error: string;
  showMessage=false;
  ngOnInit() {
  }
  onSubmit() {
    const { value } = this.myGroup;
    this.userServ.getUserByEmail(value.email, value.password).subscribe(
        (user:IUSER [])=>{
          let userEmail='';
          let userPassword='';
           if(user){
             user.forEach(item => {
               userEmail=item.email;
               userPassword=item.password
             });
             if(userPassword==value.password && userEmail==value.email){
               localStorage.setItem("user", JSON.stringify(user[0]));
               this.router.navigate(['/mytasks']);
             }
             else{
               this.showMessage=true;
               setTimeout(() => this.showMessage=false, 3000);
             }
           }
         }
      ,
      err => {
        this.error = err.message;
        this.toastr.error(`${this.error}`);
      }

    )
      }

  showPassword() {
    this.show = !this.show;
  }
}
