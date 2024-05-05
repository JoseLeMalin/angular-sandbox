import { Component, OnInit } from "@angular/core";
import { Hero } from "../services/hero";
import { HeroService } from "../services/hero.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-dashboard",
  standalone: true,
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  imports: [CommonModule, RouterModule],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private userService: UserService) {}

  callBackendAPI() {
    const resultApi = this.userService.getUsers();
    console.log("resultApi: ", resultApi);
    
  }
  ngOnInit(): void {
    // this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
  // }
}
