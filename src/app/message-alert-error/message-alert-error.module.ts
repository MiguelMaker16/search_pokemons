import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageAlertErrorComponent } from './message-alert-error.component';



@NgModule({
  declarations: [MessageAlertErrorComponent],
  imports: [
    CommonModule
  ],
  exports: [MessageAlertErrorComponent]
})
export class MessageAlertErrorModule { }
