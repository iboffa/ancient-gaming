import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectUser = (state: AppState) => state.user;

export const selectUserWalletAmount = () =>
  createSelector(selectUser, (userState) =>
    userState.user?.wallets.reduce((total, current) => total + current.amount, 0) ?? 0
  );

export const selectLoggedStatus = () =>
  createSelector(selectUser, (userState) => userState.user.id!=='');

export const selectUserName = () =>
  createSelector(selectUser, (userState) => userState.user.name);

export const selectStatus = () =>
  createSelector(selectUser, (userState) => userState.status);
