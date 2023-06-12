import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraRealizadaComponent } from './compra-realizada.component';

describe('CompraRealizadaComponent', () => {
  let component: CompraRealizadaComponent;
  let fixture: ComponentFixture<CompraRealizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraRealizadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
