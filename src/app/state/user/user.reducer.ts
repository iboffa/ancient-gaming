import { createReducer, on } from '@ngrx/store';
import { User } from 'src/graphql.types';
import { loadUserDataSuccess, updateWallet } from './user.actions';

export interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: {
    id: '',
    name: '',
    wallets: [],
  },
};

export const userReducer = createReducer(
  initialState,
  on(loadUserDataSuccess, (state, { user }) => ({
    ...state,
    user,
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
