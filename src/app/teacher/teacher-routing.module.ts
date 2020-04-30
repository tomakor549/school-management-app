import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherSectionComponent } from './components/teacher-section/teacher-section.component';
import { DatePipe } from '@angular/common';
import { TeacherScheduleComponent } from './components/teacher-schedule/teacher-schedule.component';


const routes: Routes = [
  {
    path: '',
    component: TeacherSectionComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
          { path: 'schedule', component: TeacherScheduleComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DatePipe]
})
export class TeacherRoutingModule { }
