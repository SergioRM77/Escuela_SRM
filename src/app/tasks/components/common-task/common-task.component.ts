import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-common-task',
  templateUrl: './common-task.component.html',
  styleUrls: ['./common-task.component.css']
})
export class CommonTaskComponent implements OnInit{

  @Input()
  public task!: Task;

  @Input()
  public selectedTypeTask?: string;


  public colorCardHeader: string = '';
  public colorCardBody: string = '';

  constructor(){
  }

  ngOnInit(): void {
    if(!this.task) throw new Error('Hero property is required');
    this.createColorCard()
  }

  createColorCard(){
    if(this.task.typeTask == "normal"){
      this.colorCardBody = "card-mat-body-green"
      this.colorCardHeader = "card-mat-header-green"
    }
    if(this.task.typeTask  == "urgente"){
      this.colorCardBody = "card-mat-body-orange"
      this.colorCardHeader = "card-mat-header-orange"
    }
    if(this.task.typeTask  == "terminado"){
      this.colorCardBody = "card-mat-body-blue"
      this.colorCardHeader = "card-mat-header-blue"
    }
  }
}
