import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/_services/courses/courses.service';
import { CourseModel } from 'src/app/_models/courses/course.model';
import { TeachersService } from 'src/app/_services/teachers/teachers.service';
import { Teacher } from 'src/app/_models/teachers/teacher.model';
import { TeacherCourseLinkPostModel } from 'src/app/_models/courses/teacher-course-link.model';
import { TeacherCourseLinkingModel } from 'src/app/_models/courses/teacher-course-linking.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  coursesList:CourseModel[];
  teachersList:Teacher[];
  teacherCourseLinkingsList:TeacherCourseLinkingModel[];

  constructor(private coursesService:CoursesService,
              private teachersService: TeachersService) { }

  ngOnInit() {
      this.coursesService.getCourses().subscribe(courses=>{
        this.coursesList = courses;
      });
      this.teachersService.getTeachers().subscribe(teachers=>{
        this.teachersList=teachers;
      })
      this.coursesService.getTeacherCourseLinkings().subscribe(linkings=>{
        this.teacherCourseLinkingsList=linkings;
      })
  }

  loadCourses(){
    this.coursesService.getCourses().subscribe(courses=>{
      this.coursesList = courses;
    });
  }

}
