import { Component, OnDestroy, OnInit } from "@angular/core";
import { Hero } from "../services/hero";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UserService } from "../services/user.service";
import { FormsModule } from "@angular/forms";
import { DividerModule } from "primeng/divider";
import { select, Store, StoreModule } from "@ngrx/store";
// import { getUsers } from "../store/actions/users.actions";
import { Observable } from "rxjs";
import { AppStateInterface } from "../types/appState.interface";
import { selectError, selectLoading, selectUsers } from "./store/selectors";
import { User } from "../users/users.model";
import { getUsers } from "./store/actions";

@Component({
  selector: "app-dashboard",
  standalone: true,
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  imports: [CommonModule, RouterModule, FormsModule, DividerModule, StoreModule],
})
export class DashboardComponent implements OnInit, OnDestroy {
  // private store = inject(Store);
  heroes: Hero[] = [];
  users!: User[];
  user!: User;
  // usersBis$ = this.store.select(selectUsers);
  usersBis$: Observable<User[]>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  constructor(
    private userService: UserService,
    private readonly store: Store<AppStateInterface>
  ) {
    this.isLoading$ = this.store.pipe(select(selectLoading));
    this.usersBis$ = this.store.pipe(select(selectUsers));
    this.error$ = this.store.pipe(select(selectError));
  }

  callBackendAPI() {
    // this.userService.getUsers().subscribe(response => (this.users = response));

    console.log("Before In the getSingleUser btn");
    this.store.dispatch(getUsers());
    console.log("After In the getSingleUser btn");
  }
  getSingleUser() {
    console.log("In the getSingleUser btn");

    // this.store.dispatch(getSingleUser());
    // this.userService.getUsers();
    // this.userService.getUser("9aa28082-cb3c-439d-b209-b88301a5db16").subscribe(response => (this.user = response));
    // store.dispatch(login({ username: username, password: password }));
  }
  createUser() {
    // this.store.dispatch(createUser({ userId: " v4()", name: "createdUser", email: "createdstring@string" }));
    // this.userService.getUser("9aa28082-cb3c-439d-b209-b88301a5db16").subscribe(response => (this.user = response));
    // store.dispatch(login({ username: username, password: password }));
  }

  ngOnInit(): void {
    console.log("Init Dashboard");
    // console.log("this.userBis$", this.usersBis$);
    this.store.dispatch(getUsers());
    // this.store.dispatch(createUser({ userId: " v4()", name: "string", email: "string@string" }));
    // this.store
    //   .select(selectUsers)
    //   .pipe(map(users => users))
    //   .subscribe(item => (this.usersBis = item));
    // this.users = selectUsers(initialState);
    // this.getHeroes();
    // this.userService.getUsers().subscribe(
    //   {
    //     // next: value => (this.users$ = value),
    //     error: err => console.error("Observable emitted an error: " + err),
    //     complete: () => console.log("Observable emitted the complete notification"),
    //   }
    //   //responseUsers => (this.users$ = responseUsers)
    // );
  }
  ngOnDestroy(): void {
    console.log("Destroy Dashboard");
  }
}
