import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes: Hero[] = HEROES;
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  getHero(heroId: number): Observable<Hero> {

    const hero = HEROES.find(heroItem => heroItem.id === heroId);
    if (!hero) {
      this.messageService.add(`HeroService: Hero ${heroId} not found`);
      throw new Error("Hero not found");
    }
    this.messageService.add(`HeroService: fetched hero id=${heroId}`);
    return of(hero);
  }
}
