import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
import { TeachersComponent } from './components/teachers/teachers.component';


const routes: Routes = [
  {
    path: '',
    component: AdminSectionComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
          { path: 'teachers', component: TeachersComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
