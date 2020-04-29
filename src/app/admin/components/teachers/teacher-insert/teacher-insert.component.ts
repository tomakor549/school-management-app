import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserCreationHelper } from 'src/app/_helpers/user-creation-helper.service';
import { TeachersService } from 'src/app/_services/teachers/teachers.service';
import { TeacherCreationModel } from 'src/app/_models/teachers/teacher-creation.model';
import { UserType } from 'src/app/_enums/UserType';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-teacher-insert',
  templateUrl: './teacher-insert.component.html',
  styleUrls: ['./teacher-insert.component.scss']
})
export class TeacherInsertComponent implements OnInit {

  public teacherForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    birthDate: [new Date(), Validators.required],
    login: ['', Validators.required],
  });

  get f() {
    console.log(this.teacherForm.controls)
    return this.teacherForm.controls;
  }

  createModel(){
    let date = new Date(this.teacherForm.controls["birthDate"].value);
    let teacherDTO = new TeacherCreationModel();
    teacherDTO.firstName = this.teacherForm.controls["firstName"].value;
    teacherDTO.lastName = this.teacherForm.controls["lastName"].value;
    teacherDTO.birthDate = this.datePipe.transform(date,"yyyy-MM-dd");
    teacherDTO.login = this.teacherForm.controls["login"].value;
    teacherDTO.password = this.userCreationHelper.generatePassword();
    teacherDTO.userType = UserType.TEACHER;
    return teacherDTO;
  }

  generateLogin(){
    let login = this.userCreationHelper.generateLogin(this.teacherForm.controls["firstName"].value,this.teacherForm.controls["lastName"].value);
    this.teacherForm.controls["login"].setValue(login);
  }

  addTeacher(){
    this.teachersService.addTeacher(this.createModel()).subscribe(teacher=>{
      console.log(teacher);
    });
  }

  birthDatePickerChangedHandler(date: any)
  {
    this.teacherForm.controls["birthDate"].setValue(date);
  }

  constructor(private formBuilder: FormBuilder,
    private userCreationHelper: UserCreationHelper,
    private teachersService: TeachersService,
    private datePipe: DatePipe) { }

  ngOnInit() {
  }

}
