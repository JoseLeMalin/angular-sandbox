import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeroesComponent,
  ],
})
export class AppModule {}
