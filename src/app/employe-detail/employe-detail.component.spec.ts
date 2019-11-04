import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDetail } from './employe-detail.component';

describe('EmployeDetail', () => {
  let component: EmployeDetail;
  let fixture: ComponentFixture<EmployeDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeDetail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
