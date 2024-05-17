import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorInterceptorComponent } from './http-error-interceptor.component';

describe('HttpErrorInterceptorComponent', () => {
  let component: HttpErrorInterceptorComponent;
  let fixture: ComponentFixture<HttpErrorInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpErrorInterceptorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpErrorInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
