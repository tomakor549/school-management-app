import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesInsertComponent } from './courses-insert.component';

describe('CoursesInsertComponent', () => {
  let component: CoursesInsertComponent;
  let fixture: ComponentFixture<CoursesInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
