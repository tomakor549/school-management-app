import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeacherInsertComponent } from './components/teachers/teacher-insert/teacher-insert.component';
import { SharedModule } from '../shared.module/shared.module';
import { TeachersListComponent } from './components/teachers/teachers-list/teachers-list.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ParentStudentInsertComponent } from './components/parents_students/parent-student-insert/parent-student-insert.component';
import { ParentsStudentsComponent } from './components/parents_students/parents-students/parents-students.component';
import { DropDownListComponent, DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CoursesInsertComponent } from './components/courses/courses-insert/courses-insert.component';
import { CoursesComponent } from './components/courses/courses.component';



@NgModule({
  declarations: [AdminSectionComponent, TeachersComponent, TeacherInsertComponent, TeachersListComponent, ParentStudentInsertComponent, ParentsStudentsComponent,CoursesComponent, CoursesListComponent, CoursesInsertComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    GridModule,
    ReactiveFormsModule,
    DateInputsModule,
    DropDownsModule,
    FormsModule
  ],
  providers: [DatePipe]
})
export class AdminModule { }
