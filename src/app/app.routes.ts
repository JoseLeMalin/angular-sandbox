import { Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MapSandboxComponent } from "./map-sandbox/map-sandbox.component";
import { MapSandboxEsriComponent } from "./map-sandbox-esri/map-sandbox-esri.component";

const routeConfig: Routes = [
  {
    // Root redirect to Dashboard page
    path: "",
    component: DashboardComponent,
    title: "Home page",
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    title: "Home details",
  },
  {
    path: "heroes",
    component: HeroesComponent,
    title: "Heroe's list",
  },
  {
    path: "hero-detail/:id",
    component: HeroDetailComponent,
    title: `Hero's Detail`,
  },
  {
    path: "messages",
    component: MessagesComponent,
    title: "Messages ?",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    title: "Heroe's Dashboard",
  },
  {
    path: "map",
    component: MapSandboxComponent,
    title: "Map sandbox",
  },
  {
    path: "mapesri",
    component: MapSandboxEsriComponent,
    title: "Map sandbox ESRI",
  },
];

export default routeConfig;
