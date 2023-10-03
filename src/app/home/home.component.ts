import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  namePokemon!: string;
  errorAlert: boolean = false;

  constructor(private pokemonSedData: PokemonService, private router: Router) { }

  async toggleSearch() {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${ this.namePokemon.toLowerCase() }`; 
      const response = axios.get(url);
      const pokemonData = (await response).data;
      const pokemonSendData = {
        name: pokemonData.name,
        sprite: pokemonData.sprites.front_default,
        type: pokemonData.types[0].type.name,
        order: pokemonData.order,
        height: pokemonData.height,
        weight: pokemonData.weight 
      }
      this.pokemonSedData.sendPokemonData(pokemonSendData);
      this.router.navigate(['information-pokemon']);
    } catch(err) {
      this.errorAlert = true;
    }
  }

  setErrorAlert(value: boolean) {
    this.errorAlert = value;
    this.namePokemon = '';
  }

}
