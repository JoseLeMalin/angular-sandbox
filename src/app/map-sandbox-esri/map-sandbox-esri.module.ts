import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibraryModule } from '@arcgis/map-components-angular';
import { mapEsriReducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [],
  providers: [MessageService],
  imports: [
    CommonModule,
    ComponentLibraryModule,
    StoreModule.forFeature("map-esri", mapEsriReducer)
  ]
})
export class MapSandboxEsriModule { }
