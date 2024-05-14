import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { usersReducer } from "../users/store/reducer";

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature("users", usersReducer), EffectsModule.forRoot()],
})
export class DashboardModule {}
