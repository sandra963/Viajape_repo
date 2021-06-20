import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteturisticoComponent } from './paqueteturistico.component';

describe('PaqueteturisticoComponent', () => {
  let component: PaqueteturisticoComponent;
  let fixture: ComponentFixture<PaqueteturisticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqueteturisticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteturisticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
