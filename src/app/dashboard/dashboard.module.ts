import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { usersReducer } from "./store/reducer";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature("users", usersReducer), EffectsModule.forRoot()],
})
export class DashboardModule {}
