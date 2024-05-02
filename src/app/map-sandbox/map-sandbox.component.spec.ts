import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MapSandboxComponent } from "./map-sandbox.component";

describe("MapSandboxComponent", () => {
  let component: MapSandboxComponent;
  let fixture: ComponentFixture<MapSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapSandboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
