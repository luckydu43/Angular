import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.urlTodos);
  }

  delete(todo:Todo): Observable<any> {
    const url = `${environment.urlTodos}/${todo.id}`
    return this.http.delete<Todo>(url);
  }
}
