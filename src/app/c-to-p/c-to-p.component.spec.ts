import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToPComponent } from './c-to-p.component';

describe('CToPComponent', () => {
  let component: CToPComponent;
  let fixture: ComponentFixture<CToPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CToPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CToPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
