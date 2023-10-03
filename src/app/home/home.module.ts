import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EffectBackgroundSquareModule } from '../effect-background-square/effect-background-square.module';
import { MessageAlertErrorModule } from '../message-alert-error/message-alert-error.module';
import { FormsModule } from '@angular/forms';
import { SoundBackgroundModule } from '../sound-background/sound-background.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    SoundBackgroundModule,
    EffectBackgroundSquareModule,
    MessageAlertErrorModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
