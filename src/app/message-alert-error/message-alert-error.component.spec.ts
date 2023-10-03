import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAlertErrorComponent } from './message-alert-error.component';

describe('MessageAlertErrorComponent', () => {
  let component: MessageAlertErrorComponent;
  let fixture: ComponentFixture<MessageAlertErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageAlertErrorComponent]
    });
    fixture = TestBed.createComponent(MessageAlertErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
