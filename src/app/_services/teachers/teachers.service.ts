import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/_models/teachers/teacher.model';
import { TeacherCreationModel } from 'src/app/_models/teachers/teacher-creation.model';



@Injectable({ providedIn: 'root' })
export class TeachersService {

    constructor(private http: HttpClient) {

    }

    public getTeachers() : Observable<Teacher[]>
    {
        return this.http.get<Teacher[]>('https://uni-school-system.herokuapp.com/api/teachers');
    }

    public addTeacher(model:TeacherCreationModel) : Observable<Teacher>
    {
        return this.http.post<Teacher>('https://uni-school-system.herokuapp.com/api/teachers',model);
    }
}