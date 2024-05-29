import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSandboxEsriComponent } from './map-sandbox-esri.component';

describe('MapSandboxEsriComponent', () => {
  let component: MapSandboxEsriComponent;
  let fixture: ComponentFixture<MapSandboxEsriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapSandboxEsriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapSandboxEsriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
