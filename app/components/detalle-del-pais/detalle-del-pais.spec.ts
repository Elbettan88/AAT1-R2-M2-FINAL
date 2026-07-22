import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDelPais } from './detalle-del-pais';

describe('DetalleDelPais', () => {
  let component: DetalleDelPais;
  let fixture: ComponentFixture<DetalleDelPais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDelPais],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleDelPais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
