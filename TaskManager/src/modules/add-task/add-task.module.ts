import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from 'src/pages/add-task/add-task.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AddTaskComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class AddTaskModule { }
