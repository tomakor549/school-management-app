import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseAppointmentComponent } from './teacher-course-appointment.component';

describe('TeacherCourseAppointmentComponent', () => {
  let component: TeacherCourseAppointmentComponent;
  let fixture: ComponentFixture<TeacherCourseAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
