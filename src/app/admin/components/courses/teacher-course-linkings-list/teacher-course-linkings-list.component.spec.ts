import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseLinkingsListComponent } from './teacher-course-linkings-list.component';

describe('TeacherCourseLinkingsListComponent', () => {
  let component: TeacherCourseLinkingsListComponent;
  let fixture: ComponentFixture<TeacherCourseLinkingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseLinkingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseLinkingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
