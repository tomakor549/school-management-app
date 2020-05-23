import { Component, OnInit, Input } from '@angular/core';
import { TeacherCourseLinkingModel } from 'src/app/_models/courses/teacher-course-linking.model';

@Component({
  selector: 'app-teacher-course-linkings-list',
  templateUrl: './teacher-course-linkings-list.component.html',
  styleUrls: ['./teacher-course-linkings-list.component.scss']
})
export class TeacherCourseLinkingsListComponent implements OnInit {

  @Input() linkingsList: TeacherCourseLinkingModel[];

  constructor() { }

  ngOnInit() {
  }

}
