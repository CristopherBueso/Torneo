import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsRingComponent } from './cats-ring.component';

describe('CatsRingComponent', () => {
  let component: CatsRingComponent;
  let fixture: ComponentFixture<CatsRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsRingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
