import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWalletButton } from './add-wallet';

describe('AddWalletButton', () => {
  let component: AddWalletButton;
  let fixture: ComponentFixture<AddWalletButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWalletButton],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWalletButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
