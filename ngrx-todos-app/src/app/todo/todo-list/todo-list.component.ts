import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { load } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$!: Observable<Todo[]>

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = this.store.select('todos')
  }

  ngOnInit(): void {
    this.store.dispatch(load())
  }

}
