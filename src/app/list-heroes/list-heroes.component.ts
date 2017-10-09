import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {
  liste:Hero[];

  constructor(private hs:HeroesService) { }

  ngOnInit() {
    this.hs.getAllHeroes().subscribe((heroes) => this.liste = heroes);
  }

  inspect(hero:Hero) {
    console.log(hero);
    hero.name= hero.name.substr(0,1).toUpperCase() + hero.name.substr(1);
  }
}
