import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroParticipanteComponent } from './registro-participante.component';

describe('RegistroParticipanteComponent', () => {
  let component: RegistroParticipanteComponent;
  let fixture: ComponentFixture<RegistroParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroParticipanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
