import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationPokemonComponent } from './information-pokemon.component';
import { EffectBackgroundSquareModule } from '../effect-background-square/effect-background-square.module';
import { register } from 'swiper/element/bundle';
import { SoundBackgroundModule } from '../sound-background/sound-background.module';
register();

@NgModule({
  declarations: [InformationPokemonComponent],
  imports: [
    CommonModule,
    SoundBackgroundModule,
    EffectBackgroundSquareModule
  ],
  exports: [InformationPokemonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InformationPokemonModule { }
