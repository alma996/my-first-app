import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeList } from './employe-list.component';

describe('EmployeList', () => {
  let component: EmployeList;
  let fixture: ComponentFixture<EmployeList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
