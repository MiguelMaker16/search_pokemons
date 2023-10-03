import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationPokemonModule } from './information-pokemon/information-pokemon.module';
import { EffectBackgroundSquareModule } from './effect-background-square/effect-background-square.module';
import { HomeModule } from './home/home.module';
import { MessageAlertErrorModule } from './message-alert-error/message-alert-error.module';
import { SoundBackgroundModule } from './sound-background/sound-background.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SoundBackgroundModule,
    HomeModule,
    MessageAlertErrorModule,
    EffectBackgroundSquareModule,
    InformationPokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
