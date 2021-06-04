import { createReducer, on } from "@ngrx/store";
import { Todo } from "./todo";
import { loadOK } from "./todo.actions";
import { TodoService } from "./todo.service";

export const initialState:Todo[] = [];

const _todoReducer = createReducer(
    initialState,
    on(loadOK, (state, action) => (action.todos))
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}