import { Component, OnDestroy, OnInit, Type } from "@angular/core";
import { Hero } from "../services/hero";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UserService } from "../services/user.service";
import { map, Observable, of, Subject } from "rxjs";
import { FormsModule } from "@angular/forms";

export type User = {
  id: string;
  name: string;
  email: string;
  // password: string;
};

@Component({
  selector: "app-dashboard",
  standalone: true,
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  users!: User[] | undefined;

  constructor(private userService: UserService) {}

  callBackendAPI() {
    this.userService.getUsers().subscribe(response => (this.users = response));
  }
  ngOnInit(): void {
    // this.getHeroes();
    this.userService.getUsers().subscribe(
      {
        next: value => this.users = value,
        error: err => console.error("Observable emitted an error: " + err),
        complete: () => console.log("Observable emitted the complete notification"),
      }
      //responseUsers => (this.users$ = responseUsers)
    );
  }
  ngOnDestroy(): void {
    this.users;
  }
}
