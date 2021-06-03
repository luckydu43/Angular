import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators'
import { BusService } from 'src/app/bus.service';
import { TodoService } from 'src/app/todo.service';
import { Todo } from '../todo';
import { Action } from '../../action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  todos$!: Observable<Todo[]>
  isLoading = true;

  displayedColumns: string[] = ['id', 'title', "completed", "dueDate", "colSupprimer"];

  constructor(private todoService: TodoService, private bus: BusService) {
    this.bus.bus$
      .pipe(filter(action => action.type === "NEW_TODO"))
      .subscribe((action: Action) => {
        console.log("TodoListComponent a reçu une action", action)
        this.todos$ = this.getTodos();
      })
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.todos$ = this.getTodos();
    this.isLoading = false;
  }

  getTodos(): Observable<Todo[]> {
    return this.todoService.findAll();
  }

  doDelete(todo: Todo): void {
    this.todos$ = this.todoService.delete(todo).pipe(switchMap(() => this.todoService.findAll()));
  }
}