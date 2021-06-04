import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter-actions";

export const initialState = {cpt:0};
 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({...state, cpt:state.cpt + 1})),
  on(decrement, (state) => ({...state, cpt:state.cpt - 1})),
  on(reset, (state) => ({...state, cpt:0}))
);
 
export function counterReducer(state:any, action:any) {
  return _counterReducer(state, action);
}