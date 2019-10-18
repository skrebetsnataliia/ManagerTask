import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from 'src/pages/register/register.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
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
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
