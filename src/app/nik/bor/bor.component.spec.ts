import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorComponent } from './bor.component';

describe('BorComponent', () => {
  let component: BorComponent;
  let fixture: ComponentFixture<BorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
