import { BoxesState } from "./boxes/boxes.reducer";
import { UserState } from "./user/user.reducer";

export interface AppState {
  boxes: BoxesState,
  user: UserState
}
