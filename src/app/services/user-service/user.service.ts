import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map, noop } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { updateWallet } from 'src/app/state/user/user.actions';
import {
  UpdateWalletNotification,
  User,
  UserQueryResult,
} from 'src/graphql.types';

const LOGIN_URL =
  'https://steamcommunity.com/openid/login?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.return_to=https%3A%2F%2Fapi-staging.entertoroll.com%2Fauth%2Fsteam%2Freturn&openid.realm=https%3A%2F%2Fapi-staging.entertoroll.com';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo, private store: Store<AppState>) {
    apollo
      .subscribe<UpdateWalletNotification>({
        query: gql`
          subscription OnUpdateWallet {
            updateWallet {
              wallet {
                id
                amount
                name
              }
            }
          }
        `,
      })
      .pipe(map((notification) => notification.data!.updateWallet))
      .subscribe((wallet) => this.store.dispatch(updateWallet({ wallet })));
  }

  login() {
    window.location.href = LOGIN_URL;
  }

  getUserData(): Observable<User> {
    return this.apollo
      .watchQuery<UserQueryResult>({
        query: gql`
          query {
            currentUser {
              id
              name
              wallets {
                id
                amount
                currency
              }
            }
          }
        `,
      })
      .valueChanges.pipe(map((result) => result.data.currentUser));
  }
}
