import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor( private _heroesService: HeroesService, private router:Router) {
    console.log('activated');
  }

  // Se ejecuta cunando la pgina ya esta renderizada
  ngOnInit() {
    this.heroes = this._heroesService.getHerores();
    console.log(this.heroes);
  }

  verHeroe(index: number){
    this.router.navigate(['/heroe', index])
  }

}
