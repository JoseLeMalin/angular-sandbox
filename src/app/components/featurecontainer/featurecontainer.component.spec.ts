import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturecontainerComponent } from './featurecontainer.component';

describe('FeaturecontainerComponent', () => {
  let component: FeaturecontainerComponent;
  let fixture: ComponentFixture<FeaturecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturecontainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
