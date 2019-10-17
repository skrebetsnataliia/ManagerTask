import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from 'src/pages/register/register.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { RouterModule } from '@angular/router';
const routes: RouterModule[] = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
];


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
