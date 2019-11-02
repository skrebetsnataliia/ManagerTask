import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/pages/login/login.component';
import { RegisterComponent } from 'src/pages/register/register.component';
import { HomepageComponent } from 'src/pages/homepage/homepage.component';
import { AddTaskComponent } from 'src/pages/add-task/add-task.component';
import { AllTaskModule } from 'src/modules/all-task/all-task.module';
import { AllTaskComponent } from 'src/pages/all-task/all-task.component';


const routes: Routes = [ {
  path: '',
  component: LoginComponent,
},
{
  path: 'register',
  component: RegisterComponent,
},
{
  path: 'mytasks',
  component: HomepageComponent,
},
{
  path: 'addtask',
  component: AddTaskComponent,
},
{
  path: 'alltask',
  component: AllTaskComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
