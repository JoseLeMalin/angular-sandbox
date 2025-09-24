import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DividerModule } from "primeng/divider";
import { Store, StoreModule } from "@ngrx/store";
import { v1 } from "uuid";
import dayjs from "dayjs";
import { MessageService } from "primeng/api";

import { UserService } from "../services/user.service";
import { Role, UpdateUser, User } from "../users/users.model";
import { selectError, selectLoading, selectUsers } from "../users/store/selectors";
import { createUser, deleteUser, getUsers, updateUser } from "../users/store/actions";

@Component({
  selector: "app-dashboard",
  standalone: true,
  providers: [UserService, MessageService],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  imports: [CommonModule, RouterModule, FormsModule, DividerModule, StoreModule],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  users!: User[];
  user!: User;
  // usersBis$ = this.store.select(selectUsers);
  // usersBis$: Observable<User[]>;
  // error$: Observable<string | null>;
  // isLoading$: Observable<boolean>;
  isLoading$ = this.store.select(selectLoading);
  usersBis$ = this.store.select(selectUsers);
  error$ = this.store.select(selectError);

  constructor() {}

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
    this.store.dispatch(getUsers());
  }
  ngOnDestroy(): void {
    console.log("The dashboard is destroyed", this.isLoading$);
    console.log("Destroy Dashboard");
  }
}
