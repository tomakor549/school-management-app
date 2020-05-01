import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsStudentsComponent } from './parents-students.component';

describe('ParentsStudentsComponent', () => {
  let component: ParentsStudentsComponent;
  let fixture: ComponentFixture<ParentsStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
