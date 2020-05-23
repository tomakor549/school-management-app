import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursesService } from 'src/app/_services/courses/courses.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CourseInsertModel } from 'src/app/_models/courses/course.model';

@Component({
  selector: 'app-courses-insert',
  templateUrl: './courses-insert.component.html',
  styleUrls: ['./courses-insert.component.scss']
})
export class CoursesInsertComponent implements OnInit {

    @Output() courseAdded: EventEmitter<any> = new EventEmitter()


  public courseForm = this.formBuilder.group({
    courseName: ['', [Validators.required, Validators.minLength(3)]]
  });

  createModel()
  {
    let model = new CourseInsertModel();
    model.name = this.courseForm.controls["courseName"].value;
    return model;
  }
  f()
  {
    return this.courseForm.controls;
  }

  addCourse()
  {
    this.coursesService.addCourse(this.createModel()).subscribe(course=>{
        console.log(course);
        this.courseAdded.emit();
        this.courseForm.reset();
    });
  }

  constructor(private coursesService:CoursesService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
