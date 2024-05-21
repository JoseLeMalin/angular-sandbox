import { CommonModule, NgIf, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Component, Input, OnInit } from "@angular/core";
import { CardModule } from "primeng/card";
import { Hero } from "../services/hero";
import { HeroService } from "../services/hero.service";

@Component({
  selector: "app-hero-detail",
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe, CardModule, CommonModule],
  providers: [ActivatedRoute],
  templateUrl: "./hero-detail.component.html",
  styleUrl: "./hero-detail.component.css",
})
export class HeroDetailComponent implements OnInit {
  @Input() hero!: Hero;
  heroContent!: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}
  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
}
