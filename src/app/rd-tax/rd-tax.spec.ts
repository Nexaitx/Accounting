import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdTax } from './rd-tax';

describe('RdTax', () => {
  let component: RdTax;
  let fixture: ComponentFixture<RdTax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdTax]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdTax);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
