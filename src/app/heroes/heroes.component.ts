import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  standalone: true,
  imports: [CommonModule, CardModule, FormsModule, HeroDetailComponent],
  templateUrl: "./heroes.component.html",
  styleUrl: "./heroes.component.css",
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroesList!: Hero[];
  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    console.log("ici ?");

    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: fetched hero id=${hero.id}`);
    this.router.navigate(["/hero-detail", hero.id]);
  }

  async getHeroes(): Promise<void> {
    this.heroService.getHeroes().subscribe(heroes => (this.heroesList = heroes));
  }

  ngonDestroy(): void {
    //  this.heroService.getHeroes().unsubscribe();
  }
}
