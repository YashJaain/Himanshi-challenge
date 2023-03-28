import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitinComponent } from './nitin.component';

describe('NitinComponent', () => {
  let component: NitinComponent;
  let fixture: ComponentFixture<NitinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NitinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NitinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
