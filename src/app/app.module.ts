import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { boxesReducer } from './state/boxes/boxes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BoxesEffects } from './state/boxes/boxes.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    StoreModule.forRoot({ boxes: boxesReducer }),
    EffectsModule.forRoot([BoxesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
