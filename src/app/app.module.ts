import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { boxesReducer } from './state/boxes/boxes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BoxesEffects } from './state/boxes/boxes.effects';
import { HeaderComponent } from './components/header/header.component';
import { userReducer } from './state/user/user.reducer';
import { UserEffects } from './state/user/user.effects';
import { AppState } from './state/app.state';
import { Apollo, gql } from 'apollo-angular';
import { loadUserData } from './state/user/user.actions';
import { loadBoxes } from './state/boxes/boxes.actions';

function appInitializer(store: Store<AppState>, apollo: Apollo) {
  return () =>
    new Promise((resolve) => {
      store.dispatch(loadUserData());
      store.dispatch(loadBoxes());
      resolve(true);
    });
}

@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [
        Store,
        Apollo
      ],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    StoreModule.forRoot({ boxes: boxesReducer, user: userReducer }),
    EffectsModule.forRoot([BoxesEffects, UserEffects]),
    HeaderComponent,
  ],
})
export class AppModule {}
