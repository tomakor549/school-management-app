import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeacherInsertComponent } from './components/teachers/teacher-insert/teacher-insert.component';
import { SharedModule } from '../shared.module/shared.module';
import { TeachersListComponent } from './components/teachers/teachers-list/teachers-list.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';


@NgModule({
  declarations: [AdminSectionComponent, TeachersComponent, TeacherInsertComponent, TeachersListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    GridModule,
    ReactiveFormsModule,
    DateInputsModule
  ],
  providers: [DatePipe]
})
export class AdminModule { }
