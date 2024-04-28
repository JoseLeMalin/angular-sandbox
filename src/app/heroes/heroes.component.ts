import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, CardModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroesList!: Hero[];
  constructor(private heroService: HeroService) {}
  onSelect(hero: Hero): void {
    console.log('ici ?');

    this.selectedHero = hero;
  }

  async getHeroes(): Promise<void> {
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroesList = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  ngonDestroy(): void {
    //  this.heroService.getHeroes().unsubscribe();
  }
}
