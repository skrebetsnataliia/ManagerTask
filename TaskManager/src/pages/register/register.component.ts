import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  show = false;
  ngOnInit() {
  }
  showPassword() {
    this.show = !this.show;
  }
}
