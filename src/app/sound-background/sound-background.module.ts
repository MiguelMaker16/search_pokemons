import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundBackgroundComponent } from './sound-background.component';


@NgModule({
  declarations: [SoundBackgroundComponent],
  imports: [
    CommonModule
  ],
  exports: [SoundBackgroundComponent]
})
export class SoundBackgroundModule { }
