import { Component, OnInit } from "@angular/core";
import { Hero } from "../services/hero";
import { HeroService } from "../services/hero.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UserService } from "../services/user.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-dashboard",
  standalone: true,
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  imports: [CommonModule, RouterModule],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  private click$ = new Subject<void>();
  constructor(private userService: UserService) {}

  callBackendAPI() {
    console.log("Coming here ?: ",);
    const resultApi = this.userService.getUsers().subscribe();
    console.log("resultApi: ", resultApi);
    resultApi.unsubscribe()
    
  }
  ngOnInit(): void {
    // this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
  // }
}
