import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEscuelaComponent } from './registro-escuela.component';

describe('RegistroEscuelaComponent', () => {
  let component: RegistroEscuelaComponent;
  let fixture: ComponentFixture<RegistroEscuelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEscuelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
