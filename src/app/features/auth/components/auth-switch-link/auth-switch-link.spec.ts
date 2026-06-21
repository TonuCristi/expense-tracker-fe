import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSwitchLink } from './auth-switch-link';

describe('AuthSwitchLink', () => {
  let component: AuthSwitchLink;
  let fixture: ComponentFixture<AuthSwitchLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSwitchLink],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthSwitchLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
