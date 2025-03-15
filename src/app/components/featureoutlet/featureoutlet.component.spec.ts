import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureoutletComponent } from './featureoutlet.component';

describe('FeatureoutletComponent', () => {
  let component: FeatureoutletComponent;
  let fixture: ComponentFixture<FeatureoutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureoutletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureoutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
