import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { CommonTaskComponent } from './components/common-task/common-task.component';
import { ListCommonTasksComponent } from './components/list-common-tasks/list-common-tasks.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { PriorityIconPipe } from './pipes/priority-icon.pipe';
import { ColorCardTaskPipe } from './pipes/color-card-task.pipe';



@NgModule({
  declarations: [
    HomePageComponent,
    LayoutPageComponent,
    CommonTaskComponent,
    ListCommonTasksComponent,
    NewTaskComponent,
    PriorityIconPipe,
    ColorCardTaskPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    SweetAlert2Module,
  ],
  exports:[
    PriorityIconPipe
  ]
})
export class TasksModule { }
