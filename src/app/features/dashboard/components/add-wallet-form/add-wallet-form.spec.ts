import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWalletForm } from './add-wallet-form';

describe('AddWalletForm', () => {
  let component: AddWalletForm;
  let fixture: ComponentFixture<AddWalletForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWalletForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWalletForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
