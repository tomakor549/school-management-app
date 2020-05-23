import { CourseModel } from './course.model';
import { User } from '../user';

export class TeacherCourseLinkingModel
{
    course:CourseModel;
    teacher:User;
}