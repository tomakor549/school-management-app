import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentSectionComponent } from './components/student-section/student-section.component';
import { GradebookComponent } from './components/gradebook/gradebook.component';


@NgModule({
  declarations: [StudentSectionComponent, GradebookComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
