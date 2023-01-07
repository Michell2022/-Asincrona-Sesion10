import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresadatosComponent } from './ingresadatos.component';

describe('IngresadatosComponent', () => {
  let component: IngresadatosComponent;
  let fixture: ComponentFixture<IngresadatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresadatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresadatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
