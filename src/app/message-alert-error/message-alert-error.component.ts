import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-alert-error',
  templateUrl: './message-alert-error.component.html',
  styleUrls: ['./message-alert-error.component.css']
})
export class MessageAlertErrorComponent implements OnInit {
  spawAlertError: boolean = false;

  @Output() errorAlert = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.spawAlertError = true;
    }, 250);  
  }

  toggleErrorAlert(): void {
    this.errorAlert.emit(false);
  }

}
