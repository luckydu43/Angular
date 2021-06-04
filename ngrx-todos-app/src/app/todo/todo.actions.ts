import { createAction, props } from "@ngrx/store";
import { Todo } from "./todo";
import { TypeAction } from "./type-action";

export const load = createAction(TypeAction.load);
export const loadOK = createAction(TypeAction.loadOK, props<{todos:Todo[]}>());