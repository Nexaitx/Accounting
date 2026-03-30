import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cfo } from './cfo';

describe('Cfo', () => {
  let component: Cfo;
  let fixture: ComponentFixture<Cfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
