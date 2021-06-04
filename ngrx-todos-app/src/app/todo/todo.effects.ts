import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { load, loadOK } from './todo.actions';
import { TodoService } from './todo.service';
import { TypeAction } from './type-action';

@Injectable(
)
export class TodoEffects {

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TypeAction.load),
    switchMap( () => this.todosService.findAll()),
    map(todos => loadOK({todos}))
    )
  );

  constructor(
    private actions$: Actions,
    private todosService: TodoService
  ) {}
}
