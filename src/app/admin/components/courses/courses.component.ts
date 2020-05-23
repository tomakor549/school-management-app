import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/_services/courses/courses.service';
import { CourseModel } from 'src/app/_models/courses/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  coursesList:CourseModel[];

  constructor(private coursesService:CoursesService) { }

  ngOnInit() {
      this.coursesService.getCourses().subscribe(courses=>{
        this.coursesList = courses;
      });
  }

  loadCourses(){
    this.coursesService.getCourses().subscribe(courses=>{
      this.coursesList = courses;
    });
  }

}
