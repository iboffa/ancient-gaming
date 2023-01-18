import { createAction, props } from "@ngrx/store";
import { User, Wallet } from "src/graphql.types";

export const updateWallet = createAction('[User] Update wallet', props<{wallet: Wallet}>());
export const loadUserData = createAction('[User] load data');
export const loadUserDataSuccess = createAction('[User] load data success', props<{user: User}>());
export const loadUserDataFailure = createAction('[User] load data failure' );
export const subscribeWalletUpdate = createAction('[User] subscribe user wallet');
