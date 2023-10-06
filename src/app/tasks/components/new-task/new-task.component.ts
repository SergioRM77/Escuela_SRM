
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task.interface';
import { filter, find, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit{

  public taskForm = new FormGroup({
    id:             new FormControl<string>(''),
    title:          new FormControl<string>('', { nonNullable: true}),
    description:    new FormControl<string>('', { nonNullable: true}),
    creator:        new FormControl('', { nonNullable: true}),
    date:           new FormControl(),
    typeTask:       new FormControl(),

  });

  typeTask =[
    "normal",
    "urgente",
    "terminado"
  ]

  public today?: Date;
  public pipe = new DatePipe('en-En')

  constructor(
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title){}

    get currentTask(): Task{
      const task = this.taskForm.value as Task;

      return task;
    }


    ngOnInit(): void {
      if(!this.router.url.includes('edit')) {

        this.title.setTitle("Nueva Tarea")
        return
      };
      this.title.setTitle("Editar Tarea")

    //ActivatedRouter sirve para coger información de la ruta
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.tasksService.getTaskById(id))
      ).subscribe( hero => {

        if(!hero) return this.router.navigateByUrl('/');

        //reset() o lo pone en vacío o lo devuelve a su estado original,
        //en este caso envía los datos e origen
        this.taskForm.reset(hero)
        return;
      })
    }

    onSubmit(){
      if(this.taskForm.invalid) return;

      //TODO: validar si tiene id es editar

      if(this.currentTask.id){
        this.tasksService.updateTask(this.currentTask)
          .subscribe(task => {
            this.router.navigateByUrl('/home');
            console.log("Tarea Añadida");
          });

          return;
      }

      this.today = new Date();
      let changedFormat = this.pipe.transform(this.today, 'dd/MM/YYYY')
      this.taskForm.value.date = changedFormat;
      this.tasksService.addTask(this.currentTask)
        .subscribe(task => {
          this.router.navigateByUrl('/home');
          console.log("Tarea Añadida");
        })

    }

    onDeleteTask(): void{
      console.log(this.currentTask)
      if(!this.currentTask.id) throw Error('Task id is required');

      this.activatedRoute.params.pipe(

        switchMap(() => this.tasksService.deleteTaskById(this.currentTask.id)),
        filter((wasDeleted: boolean) => wasDeleted)
      ).subscribe(resutl => {
          this.router.navigateByUrl('/home')
        })
    }

    alertOnDeletedTask(){
      Swal.fire({
        title: '¿Estas seguro de Eliminar?',
        text: "Se perderán para siempre los datos de " + this.currentTask.title,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar igualmente'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'Tarea borrada',
            'success'
          )
          this.onDeleteTask()
        }
      })
    }
  }
