import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentStudentInsertComponent } from './parent-student-insert.component';

describe('ParentStudentInsertComponent', () => {
  let component: ParentStudentInsertComponent;
  let fixture: ComponentFixture<ParentStudentInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentStudentInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentStudentInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
