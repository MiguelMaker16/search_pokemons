import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonData!: any;
  soundBackground: any = new Audio('../../assets/sounds/intro.mp3');
  soundPlay: number = 1;

  constructor() { 
    this.soundBackground.loop = true;
  }

  sendPokemonData(data: any): void {
        this.pokemonData = data; 
     }

  getPokemonData(): any {
    return this.pokemonData;
  }

  soundPlayState(): any {
    this.soundPlay *= -1;
    if(this.soundPlay > 0) {
      this.soundBackground.pause();
    } else {
      this.soundBackground.play();
    }
    return this.soundPlay;
  }

  getSoundPlayState(): number {
    return this.soundPlay;
  }

}
