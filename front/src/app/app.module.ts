import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { TaskComponent } from './views/task/task.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskFormComponent } from './components/form/task/task.component';
import { LatestTaskComponent } from './components/latest-task/latest-task.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    PageNotFoundComponent,
    TaskFormComponent,
    LatestTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
