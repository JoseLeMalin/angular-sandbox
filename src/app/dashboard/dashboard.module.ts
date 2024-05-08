import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { usersReducer } from "../store/reducers/users.reducers";

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature("users", usersReducer)],
})
export class DashboardModule {}
