import { Component, OnInit } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators'
import { BusService } from 'src/app/bus.service';
import { TodoService } from 'src/app/todo.service';
import { Todo } from '../todo';
import { Action } from '../../action';
import { TypeAction } from 'src/app/type-action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  todos$!: Observable<Todo[]>
  isLoading = false;

  displayedColumns: string[] = ['id', 'title', "completed", "dueDate", "colSupprimer"];

  constructor(private todoService: TodoService, private bus: BusService) {
    console.log("constructeur")

    const load$ = this.bus.bus$.pipe(filter(action => action.type === TypeAction.loadTodos))
    const new$ = this.bus.bus$.pipe(filter(action => action.type === TypeAction.newTodo),
      switchMap((action: Action) => this.todoService.save(action.payload as Todo)))
    const delete$ = this.bus.bus$.pipe(
      filter(action => action.type === TypeAction.deleteTodo),
      switchMap((action: Action) => this.todoService.delete(action.payload as Todo))
    )
    this.todos$ = merge(new$, load$, delete$).pipe(switchMap(() => this.todoService.findAll()))
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    this.bus.dispatch({ type: TypeAction.loadTodos })
  }

  doDelete(todo: Todo): void {
    //this.todos$ = this.todoService.delete(todo).pipe(switchMap(() => this.todoService.findAll()));
    const a: Action = { type: TypeAction.deleteTodo, payload: todo }
    console.log("envoi de la notification de suppression d'un TODO dans la queue")
    this.bus.dispatch(a)
  }
}