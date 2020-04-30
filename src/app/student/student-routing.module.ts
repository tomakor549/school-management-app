import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentSectionComponent } from './components/student-section/student-section.component';
import { GradebookComponent } from './components/gradebook/gradebook.component';


const routes: Routes = [
  {
    path: '',
    component: StudentSectionComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
          { path: 'grades', component: GradebookComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
