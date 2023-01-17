import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { BoxesState } from "./boxes.reducer";

export const selectBoxes = (state: AppState) => state.boxes;

export const selectAllBoxes = createSelector(
  selectBoxes,
  (state: BoxesState) => state.boxes
)

export const selectBox = (boxId: string) => createSelector(
  selectBoxes, (boxesState) => boxesState.boxes.find((box) => box.id === boxId)
)
