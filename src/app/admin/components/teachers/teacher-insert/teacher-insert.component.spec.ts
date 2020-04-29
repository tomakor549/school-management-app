import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInsertComponent } from './teacher-insert.component';

describe('TeacherInsertComponent', () => {
  let component: TeacherInsertComponent;
  let fixture: ComponentFixture<TeacherInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
