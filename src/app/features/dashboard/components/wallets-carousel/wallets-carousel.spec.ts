import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsCarousel } from './wallets-carousel';

describe('WalletsCarousel', () => {
  let component: WalletsCarousel;
  let fixture: ComponentFixture<WalletsCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletsCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(WalletsCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
