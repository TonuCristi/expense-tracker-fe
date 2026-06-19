import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTransactionsList } from './last-transactions-list';

describe('LastTransactionsList', () => {
  let component: LastTransactionsList;
  let fixture: ComponentFixture<LastTransactionsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastTransactionsList],
    }).compileComponents();

    fixture = TestBed.createComponent(LastTransactionsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
