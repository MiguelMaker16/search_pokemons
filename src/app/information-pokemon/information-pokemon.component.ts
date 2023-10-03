import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-information-pokemon',
  templateUrl: './information-pokemon.component.html',
  styleUrls: ['./information-pokemon.component.css']
})
export class InformationPokemonComponent implements OnInit {
  
  openPokeBall: boolean = false;
  pokemonData!: any;

  constructor(private getPokemonData: PokemonService, private router: Router) { }

  ngOnInit(): void {
    try {
      const response = this.getPokemonData.getPokemonData();
      this.pokemonData = [
        {sprite_pokemon: response.sprite},
        {text: 'Nombre: ', property: response.name},
        {text: 'Tipo: ', property: response.type},
        {text: 'Edad: ', property: response.order},
        {text: 'Altura: ', property: response.height},
        {text: 'Peso: ', property: response.weight}
      ]
    } catch(err) {
      this.router.navigate(['home']);
    }
  }

  togglePokeBall(): void {
    this.openPokeBall = !this.openPokeBall;
  }

  toggleExit(): void {
    this.router.navigate(['home']);
  }

  toggleNext():void {
    const swiperNext = document.querySelector('swiper-container');
    swiperNext?.swiper.slideNext();
    this.openPokeBall = false;
  }

  togglePrevious():void {
    const swiperPrevious = document.querySelector('swiper-container');
    swiperPrevious?.swiper.slidePrev();
    this.openPokeBall = false;
  }

}
