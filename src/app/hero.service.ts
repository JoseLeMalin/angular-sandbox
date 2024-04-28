import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes: Hero[] = HEROES;
  private heroesUrl = "api/heroes"; // URL to web api
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  getHero(heroId: number): Observable<Hero> {
    const hero = HEROES.find(heroItem => heroItem.id === heroId);
    if (!hero) {
      this.log(`HeroService: Hero ${heroId} not found`);
      throw new Error('Hero not found');
    }
    this.log(`HeroService: fetched hero id=${heroId}`);
    return of(hero);
  }
}
