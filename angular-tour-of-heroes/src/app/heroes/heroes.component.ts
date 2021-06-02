import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from './mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //heroes = HEROES;
  heroes: Hero[] = [];
  

  windstorm: Hero = {
    id: 1,
    nom: 'Windstorm',
    skill: 'moyen mais a du potentiel'
  };

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onKeyup(e: any) {
    this.windstorm.nom = e.target.value
  }

  /*selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`${hero.nom} a été sélectionné`);
  }*/

}
