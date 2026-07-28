import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDePaises } from './tarjeta-de-paises';

describe('TarjetaDePaises', () => {
  let component: TarjetaDePaises;
  let fixture: ComponentFixture<TarjetaDePaises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaDePaises],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaDePaises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
