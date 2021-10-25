import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaluladoraComponent } from './caluladora.component';

describe('CaluladoraComponent', () => {
  let component: CaluladoraComponent;
  let fixture: ComponentFixture<CaluladoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaluladoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaluladoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
