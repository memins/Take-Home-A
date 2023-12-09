import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task-1/task-1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Task2Component } from './task-2/task-2.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [AppComponent, Task1Component, Task2Component, InputComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
