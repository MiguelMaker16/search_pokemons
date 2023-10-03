import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-sound-background',
  templateUrl: './sound-background.component.html',
  styleUrls: ['./sound-background.component.css']
})
export class SoundBackgroundComponent implements OnInit {
  soundChangeImge: number = -1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.soundChangeImge = -this.pokemonService.getSoundPlayState();  
  }

  toggleSound(): void {
    const sound = this.pokemonService.soundPlayState();
    this.soundChangeImge = -sound;
  }
}
