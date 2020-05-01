import { HttpClient } from '@angular/common/http';
import { ParentStudentCreationModel } from 'src/app/_models/parents_students/parent-student.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ParentsStudentsService{
    
    constructor(private http: HttpClient) {
    }

    addParentAndStudent(model: ParentStudentCreationModel): Observable<any>{
        return this.http.post<any>('https://uni-school-system.herokuapp.com/api/parentsStudents',model);
    }

}