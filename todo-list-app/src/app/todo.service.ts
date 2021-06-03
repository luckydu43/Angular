import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.urlTodos);

  }

  delete(todo: Todo): Observable<any> {
    const url = `${environment.urlTodos}/${todo.id}`
    return this.http.delete<Todo>(url);
  }

  save(todo: Todo): Observable<any> {
    return this.http.post<any>(environment.urlTodos, todo, this.httpOptions);
  }
}
