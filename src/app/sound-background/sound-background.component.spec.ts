import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundBackgroundComponent } from './sound-background.component';

describe('SoundBackgroundComponent', () => {
  let component: SoundBackgroundComponent;
  let fixture: ComponentFixture<SoundBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoundBackgroundComponent]
    });
    fixture = TestBed.createComponent(SoundBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
