import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators'
import { TodoService } from 'src/app/todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  todos$!:Observable<Todo[]>
  isLoading = true;

  displayedColumns: string[] = ['id', 'title', "completed", "dueDate", "colSupprimer"];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.todos$ = this.getTodos();
    this.isLoading = false;
  }

  getTodos(): Observable<Todo[]> {
    return this.todoService.findAll();
  } 

  doDelete(todo:Todo): void {
    this.todos$ =this.todoService.delete(todo).pipe(switchMap(()=>this.todoService.findAll()));
  }
}