import { CommonModule, NgIf, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Hero } from "../services/hero";
import { Component, Input, OnInit } from "@angular/core";
import { CardModule } from "primeng/card";
import { HeroService } from "../services/hero.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-hero-detail",
  standalone: true,
  providers: [ActivatedRoute],
  imports: [FormsModule, NgIf, UpperCasePipe, CardModule, CommonModule],
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
