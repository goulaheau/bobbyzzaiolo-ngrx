import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './+state/app.reducer';
import { appInitialState } from './+state/app.init';
import { AppEffects } from './+state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PizzasModule } from './pizzas/pizzas.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsModule } from 'apps/bobbyzzaiolo-ngrx/src/app/ingredients/ingredients.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from 'clarity-angular';

@NgModule({
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule,
    NxModule.forRoot(),
    StoreModule.forRoot({ app: appReducer }, { initialState: { app: appInitialState } }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects]),

    CoreModule.forRoot(),
    AppRoutingModule,
    PizzasModule,
    IngredientsModule
  ],
  declarations: [AppComponent],
  bootstrap   : [AppComponent],
  providers   : [
    AppEffects
  ]
})
export class AppModule {}
