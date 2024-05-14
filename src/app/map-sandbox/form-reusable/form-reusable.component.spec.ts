import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormReusableComponent } from "./form-reusable.component";

describe("FormReusableComponent", () => {
  let component: FormReusableComponent;
  let fixture: ComponentFixture<FormReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReusableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
