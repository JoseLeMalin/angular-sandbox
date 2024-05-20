import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DividerModule } from "primeng/divider";
import { select, Store, StoreModule } from "@ngrx/store";
import { Observable } from "rxjs";
import { v1 } from "uuid";

import { AppStateInterface } from "../types/appState.interface";
import { UserService } from "../services/user.service";
import { Role, UpdateUser, User } from "../users/users.model";
import { Hero } from "../services/hero";
import { selectError, selectLoading, selectUsers } from "../users/store/selectors";
import { createUser, deleteUser, getUsers, updateUser } from "../users/store/actions";
import dayjs from "dayjs";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-dashboard",
  standalone: true,
  providers: [UserService, MessageService],
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
  }
  updateUser() {
    const updatedUser: UpdateUser = {
      id: "bc76c1f5-76ac-4034-9268-b8b803ec25b7",
      createdAt: dayjs().toString(),
      updatedAt: dayjs().toString(),
      name: "updatedUser",
      email: "updatedstring@string",
      role: Role.EDITOR,
    };
    this.store.dispatch(updateUser({ user: updatedUser }));
  }
  deleteUser(userId: string) {
    this.store.dispatch(deleteUser({ userId }));
  }
  createUser() {
    this.store.dispatch(
      createUser({
        user: {
          name: `createdUser-${v1()}`,
          email: "createdstring@string",
          password: "thenewupdatedpwd",
          role: Role.GHOST,
        },
      })
    );
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
