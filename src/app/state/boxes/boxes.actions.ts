import { createAction, props } from "@ngrx/store";
import { Box } from "src/graphql.types";

export const loadBoxes = createAction(
  '[Boxes list] Get boxes'
);

export const loadBoxesSuccess = createAction('[Boxes list] Get boxes success', props<{boxes: Box[]}>());
