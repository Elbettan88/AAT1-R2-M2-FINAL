import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePaises } from './lista-de-paises';

describe('ListaDePaises', () => {
  let component: ListaDePaises;
  let fixture: ComponentFixture<ListaDePaises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDePaises],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDePaises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
