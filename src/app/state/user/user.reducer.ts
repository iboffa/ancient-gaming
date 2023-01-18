import { createReducer, on } from '@ngrx/store';
import { User } from 'src/graphql.types';
import {
  loadUserDataFailure,
  loadUserDataSuccess,
  updateWallet,
} from './user.actions';

export interface UserState {
  user: User;
  status: 'initial' | 'success' | 'failure';
}

export const initialState: UserState = {
  user: {
    id: '',
    name: '',
    wallets: [],
  },
  status: 'initial',
};

export const userReducer = createReducer(
  initialState,
  on(loadUserDataSuccess, (state, { user }) => ({
    ...state,
    status: 'success',
    user,
  })),
  on(loadUserDataFailure, (state) => ({
    ...state,
    status: 'failure',
  })),
  on(updateWallet, (state, { wallet }) => {
    const wallets = [
      ...state.user.wallets.filter((w) => w.id !== wallet.id),
      wallet,
    ];
    return {
      ...state,
      wallets,
    };
  })
);
