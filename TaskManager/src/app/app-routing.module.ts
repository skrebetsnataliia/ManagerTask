import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/pages/login/login.component';
import { RegisterComponent } from 'src/pages/register/register.component';
import { HomepageComponent } from 'src/pages/homepage/homepage.component';


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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
