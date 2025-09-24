import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MapSandboxComponent } from "./map-sandbox.component";
// import { By } from "@angular/platform-browser";

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
  it("should create", () => {
    // const formContainer = fixture.debugElement.query(By.css('[data-testid="form-container"]'));
    // expect(formContainer.nativeElement).toBeFalsy();
  });
});
