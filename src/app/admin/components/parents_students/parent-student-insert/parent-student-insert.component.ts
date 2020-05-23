import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserCreationHelper } from 'src/app/_helpers/user-creation-helper.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ParentsStudentsService } from 'src/app/_services/parents_students/parents-students.service';
import { ParentStudentCreationModel } from 'src/app/_models/parents_students/parent-student.model';
import { ClassesService } from 'src/app/_services/classes/classes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parent-student-insert',
  templateUrl: './parent-student-insert.component.html',
  styleUrls: ['./parent-student-insert.component.scss']
})
export class ParentStudentInsertComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private userCreationHelper: UserCreationHelper,
    private datePipe: DatePipe,
    private parentStudentService: ParentsStudentsService,
    private classesService: ClassesService) { }

    public classList = []

  ngOnInit() {
    this.classesService.getClasses().subscribe(classes=>{
      classes.forEach(cl=>{
        this.classList.push({id:cl.id,name:cl.name});
      })
    })
  }

  public parentStudentForm = this.formBuilder.group({
    parentFirstName: ['', [Validators.required, Validators.minLength(3)]],
    parentLastName: ['', [Validators.required, Validators.minLength(3)]],
    parentBirthDate: [new Date(), Validators.required],
    parentLogin: ['', Validators.required],
    studentFirstName: ['', [Validators.required, Validators.minLength(3)]],
    studentLastName: ['', [Validators.required, Validators.minLength(3)]],
    studentBirthDate: [new Date(), Validators.required],
    studentLogin: ['', Validators.required],
    classId: ['', Validators.required],
  });

  get f() {
    return this.parentStudentForm.controls;
  }

  addParentAndStudent(){
    this.parentStudentService.addParentAndStudent(this.createModel()).subscribe(ps=>{
      console.log(ps);
    })
  }

  createModel(){
    let parentBirthDate = new Date(this.parentStudentForm.controls["parentBirthDate"].value);
    let studentBirthDate = new Date(this.parentStudentForm.controls["studentBirthDate"].value);
    let model = new ParentStudentCreationModel();
    model.parent.firstName = this.parentStudentForm.controls["parentLastName"].value;
    model.parent.lastName = this.parentStudentForm.controls["parentLastName"].value;
    model.parent.birthDate = this.datePipe.transform(parentBirthDate,"yyyy-MM-dd");
    model.parent.login = this.parentStudentForm.controls["parentLogin"].value;
    model.parent.password = this.userCreationHelper.generatePassword();
    model.student.birthDate = this.datePipe.transform(studentBirthDate,"yyyy-MM-dd");
    model.student.firstName = this.parentStudentForm.controls["studentFirstName"].value;
    model.student.lastName =  this.parentStudentForm.controls["studentLastName"].value;
    model.student.login = this.parentStudentForm.controls["studentLogin"].value;
    model.student.password = this.userCreationHelper.generatePassword();
    model.student.classId = this.parentStudentForm.controls["classId"].value;

    return model;
  }

  dropdownValueChanged(val:any){
   
    this.parentStudentForm.controls["classId"].setValue(val.id);
  }

  parentBirthDatePickerChangedHandler(date: any)
  {
    this.parentStudentForm.controls["parentBirthDate"].setValue(date);
  }

  studentBirthDatePickerChangedHandler(date: any)
  {
    this.parentStudentForm.controls["studentBirthDate"].setValue(date);
  }

  generateParentsLogin(){
    let login = this.userCreationHelper.generateLogin(this.parentStudentForm.controls["parentFirstName"].value,this.parentStudentForm.controls["parentLastName"].value);
    this.parentStudentForm.controls["parentLogin"].setValue(login);
  }

  generateStudentLogin(){
    let login = this.userCreationHelper.generateLogin(this.parentStudentForm.controls["studentFirstName"].value,this.parentStudentForm.controls["studentLastName"].value);
    this.parentStudentForm.controls["studentLogin"].setValue(login);
  }


}
