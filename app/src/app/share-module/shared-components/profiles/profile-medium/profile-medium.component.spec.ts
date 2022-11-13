import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMediumComponent } from './profile-medium.component';

describe('ProfileMediumComponent', () => {
  let component: ProfileMediumComponent;
  let fixture: ComponentFixture<ProfileMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMediumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
