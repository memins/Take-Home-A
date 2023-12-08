import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task-1/task-1.component';

const routes: Routes = [{ path: 'task-1', component: Task1Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
