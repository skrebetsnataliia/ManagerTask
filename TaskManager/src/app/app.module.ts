import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'src/modules/auth/auth.module';
import { HomepageModule } from 'src/modules/homepage/homepage.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskModule } from 'src/modules/add-task/add-task.module';
import { AllTaskModule } from 'src/modules/all-task/all-task.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomepageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AddTaskModule,
    AllTaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
