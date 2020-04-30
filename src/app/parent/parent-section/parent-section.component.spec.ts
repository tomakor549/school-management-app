import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSectionComponent } from './parent-section.component';

describe('ParentSectionComponent', () => {
  let component: ParentSectionComponent;
  let fixture: ComponentFixture<ParentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
