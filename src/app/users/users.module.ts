import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { usersReducer } from "./store/reducer";
import { MessageService } from "primeng/api";

@NgModule({
  declarations: [],
  providers: [MessageService],
  imports: [CommonModule, StoreModule.forFeature("users", usersReducer)],
})
export class UsersModule {}
