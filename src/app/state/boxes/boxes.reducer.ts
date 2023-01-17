import { createReducer, on } from "@ngrx/store";
import { Box } from "src/graphql.types";
import { loadBoxesSuccess } from "./boxes.actions";

export interface BoxesState {
  boxes: Box[]
}

export const initialState: BoxesState = {
  boxes: []
}

export const boxesReducer = createReducer(
  initialState,
  on(loadBoxesSuccess, (state, {boxes})=>({
    ...state,
    boxes}))
);
