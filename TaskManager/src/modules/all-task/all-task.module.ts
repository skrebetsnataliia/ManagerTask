import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTaskComponent } from 'src/pages/all-task/all-task.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AllTaskComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AllTaskModule { }
