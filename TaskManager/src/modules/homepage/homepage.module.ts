import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from 'src/pages/homepage/homepage.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[] = [
  {
    path: '',
    component: HomepageComponent,
  },
];



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomepageModule { }
