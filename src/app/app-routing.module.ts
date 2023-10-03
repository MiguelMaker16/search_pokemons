import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationPokemonComponent } from './information-pokemon/information-pokemon.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'information-pokemon', component: InformationPokemonComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
