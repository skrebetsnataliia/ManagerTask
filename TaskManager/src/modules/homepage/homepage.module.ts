import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from 'src/pages/homepage/homepage.component';
import { Route, RouterModule } from '@angular/router';
import { TaskComponent } from 'src/components/task/task.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
const routes: Route[] = [
  {
    path: '',
    component: HomepageComponent,
  },
];



@NgModule({
  declarations: [HomepageComponent, TaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomepageModule { }
