import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLoginComponent } from './remove-login.component';

describe('RemoveLoginComponent', () => {
  let component: RemoveLoginComponent;
  let fixture: ComponentFixture<RemoveLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
