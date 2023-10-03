import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectBackgroundSquareComponent } from './effect-background-square.component';

describe('EffectBackgroundSquareComponent', () => {
  let component: EffectBackgroundSquareComponent;
  let fixture: ComponentFixture<EffectBackgroundSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EffectBackgroundSquareComponent]
    });
    fixture = TestBed.createComponent(EffectBackgroundSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
