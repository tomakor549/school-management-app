import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from 'src/app/_models/courses/course.model';
import { Teacher } from 'src/app/_models/teachers/teacher.model';
import { CoursesService } from 'src/app/_services/courses/courses.service';
import { TeacherCourseLinkPostModel } from 'src/app/_models/courses/teacher-course-link.model';

@Component({
  selector: 'app-teacher-course-appointment',
  templateUrl: './teacher-course-appointment.component.html',
  styleUrls: ['./teacher-course-appointment.component.scss']
})
export class TeacherCourseAppointmentComponent implements OnInit {

  @Input() coursesList: CourseModel[];
  @Input() teachersList: Teacher[];
  
  selectedTeacher:Teacher;
  selectedCourseId:number;

  teacherSelected(event:any)
  {
    console.log(event);
    if(event.selectedRows[0])
    {
      this.selectedTeacher = event.selectedRows[0].dataItem;
    }
  }
  dropdownValueChanged(val:any)
  {
    this.selectedCourseId=val.id;
  }

  linkTeacherWithCourse()
  {
    let model = new TeacherCourseLinkPostModel();
    model.courseId=this.selectedCourseId;
    model.teacherId = this.selectedTeacher.id;

    this.coursesService.linkTeacherWithCourse(model).subscribe(resp=>{
      console.log(resp);
    })
  }

  constructor(private coursesService:CoursesService) { }

  ngOnInit() {
  }

}
