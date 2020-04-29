import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/_services/teachers/teachers.service';
import { Teacher } from 'src/app/_models/teachers/teacher.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachersList:Teacher[];

  constructor(private teachersService: TeachersService) { }

  ngOnInit() {
    this.teachersService.getTeachers().subscribe(teachers=>{
      console.log(teachers);
      this.teachersList=teachers;
    })
  }

}
