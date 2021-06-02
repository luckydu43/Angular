import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, nom: 'Dr Nice', skill: '= au niveau de Brice' },
      { id: 12, nom: 'Narco', skill: '= suffisant pour diriger un cartel' },
      { id: 13, nom: 'Bombasto', skill: ' = pète un peu tout' },
      { id: 14, nom: 'Celeritas', skill: ' = va vite' },
      { id: 15, nom: 'Magneta', skill: ' = domine Magneto' },
      { id: 16, nom: 'RubberMan', skill: ' = n\'a jamais réussi à s\'arracher une dent' },
      { id: 17, nom: 'Dynama', skill: ' = peut faire briller une ampoule avec une dynamo dans sa poche' },
      { id: 18, nom: 'Dr IQ', skill: ' = extraordinairement con' },
      { id: 19, nom: 'Magma', skill: ' = a un tempérament bouillant' },
      { id: 20, nom: 'Tornado', skill: ' = fait bouger très vite sa main' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}