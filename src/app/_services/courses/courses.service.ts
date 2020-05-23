import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseModel, CourseInsertModel } from 'src/app/_models/courses/course.model';
import { TeacherCourseLinkPostModel } from 'src/app/_models/courses/teacher-course-link.model';
import { TeacherCourseLinkingModel } from 'src/app/_models/courses/teacher-course-linking.model';



@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    constructor(private http: HttpClient) {
    }

    addCourse(course: CourseInsertModel): Observable<CourseModel> {
        return this.http.post<CourseModel>('https://uni-school-system.herokuapp.com/api/courses', course)
    }

    updateCourse(course: CourseModel): Observable<CourseModel> {
        return this.http.put<CourseModel>('https://uni-school-system.herokuapp.com/api/courses/'+course.id, course)
    }

    getCourses(): Observable<CourseModel[]> {
        return this.http.get<CourseModel[]>('https://uni-school-system.herokuapp.com/api/courses');
    }

    deleteCourse(course: CourseModel): Observable<any> {
        return this.http.delete<CourseModel[]>('https://uni-school-system.herokuapp.com/api/courses/'+course.id);
    }

    linkTeacherWithCourse(model: TeacherCourseLinkPostModel): Observable<any> 
    {
        return this.http.post<any>('https://uni-school-system.herokuapp.com/api/teacherCourses', model);
    }

    getTeacherCourseLinkings(): Observable<TeacherCourseLinkingModel[]> 
    {
        return this.http.get<TeacherCourseLinkingModel[]>('https://uni-school-system.herokuapp.com/api/teacherCourses');
    }

}