import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolvidoComponent } from './devolvido.component';

describe('DevolvidoComponent', () => {
  let component: DevolvidoComponent;
  let fixture: ComponentFixture<DevolvidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolvidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolvidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
