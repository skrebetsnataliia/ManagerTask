import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { IUSER } from 'src/interfaces/user.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router, private toastr: ToastrService) { }
  myGroup = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    firstName:new FormControl(null, [Validators.required]),
    lastName:new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  error: string;
  show = false;
  ngOnInit() {
  }
  showPassword() {
    this.show = !this.show;
  }
  onSubmit() {
    const { value } = this.myGroup;
    const user:IUSER={
      firstName: value.firstName,
      lastName: value.lastName,
      email: value. email,
      password: value.password}
    this.userServ.createUser(user).subscribe(
        (user:IUSER)=>{
          localStorage.setItem("user", JSON.stringify(user));
          this.router.navigate(['/mytasks']);
        },
      err => {
        this.error = err.message;
        this.toastr.error(`${this.error}`);
      }
    )
    }
}
