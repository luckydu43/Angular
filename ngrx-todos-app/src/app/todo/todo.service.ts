import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]> {
    console.log("Envoi de la liste des TODOs")
    return this.http.get<Todo[]>(environment.urlTodos);

  }

  delete(todo: Todo): Observable<any> {
    console.log(`Suppression duTODO d'ID ${todo.id}`)
    const url = `${environment.urlTodos}/${todo.id}`
    return this.http.delete<Todo>(url);
  }

  save(todo: Todo): Observable<any> {
    console.log("Enregistrement d'un TODO")
    return this.http.post<any>(environment.urlTodos, todo, this.httpOptions);
  }
}
