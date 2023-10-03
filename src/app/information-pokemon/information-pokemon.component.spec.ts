import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPokemonComponent } from './information-pokemon.component';

describe('InformationPokemonComponent', () => {
  let component: InformationPokemonComponent;
  let fixture: ComponentFixture<InformationPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationPokemonComponent]
    });
    fixture = TestBed.createComponent(InformationPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
