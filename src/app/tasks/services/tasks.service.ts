import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from 'src/environments/environment';
import { Task } from '../interfaces/task.interface';

@Injectable({providedIn: 'root'})
export class TasksService {

  private baseUrl: string = environments.baseUrl;
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`)
  }

  getTaskById(id: string): Observable<Task| undefined>{
    return this.http.get<Task>(`${this.baseUrl}/tasks/${id}`)
      .pipe(
        catchError(error => of(undefined))
      )
  }

  getSuggestions(query: string): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/tasks?q=${query}`);
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(`${this.baseUrl}/tasks/`, task)
  }

  updateTask(task: Task): Observable<Task>{
    if(!task.id) throw Error('Task id is required')
    return this.http.patch<Task>(`${this.baseUrl}/tasks/${task.id}`, task)
  }

  deleteTaskById(id: string): Observable<boolean>{

    return this.http.delete(`${this.baseUrl}/Tasks/${id}`)
    .pipe(
      map(resp => true),
      catchError(error => of(false)),
    )
  }


}
