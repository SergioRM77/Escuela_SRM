import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';
import { filter, map, switchMap, toArray } from 'rxjs';

@Component({
  selector: 'app-list-common-tasks',
  templateUrl: './list-common-tasks.component.html',
  styleUrls: ['./list-common-tasks.component.css']
})
export class ListCommonTasksComponent implements OnInit{

  public tasks: Task[] = [];
  public numTasks: number = 0;
  public typesTasks: string[] = ["normal", "urgente", "terminado"]
  public title: string = "Tareas";

  @Input()
  public selectedTypeTask?: string;
  constructor(private tasksService: TasksService){}

  ngOnInit(): void {
    if (!this.selectedTypeTask || !this.typesTasks.includes(this.selectedTypeTask)) {

      this.tasksService.getTasks()
        .subscribe(tasks => {
          this.tasks = tasks
          // filter: para filtrar el numero de tareas por this.selectedTypeTask
          this.numTasks = this.tasks.length
        })
    }else{

      this.tasksService.getTasks()
        .pipe(
          map(tasks => tasks.filter(task => task.typeTask === this.selectedTypeTask))
        )
          .subscribe(tasks => {
            this.tasks = tasks
            this.numTasks = this.tasks.length
          })
    }

  }
}
