import { UserType } from 'src/app/_enums/UserType';
import { ClassModel } from '../class/class.model';

export class StudentModel{
    id:number;
    class: ClassModel;
    firstName: string;
    lastName: string;
    login: string;
    birthDate: string;
    userType: UserType;
    password: string;
}

export class StudentCreationModel{
    classId: number;
    firstName: string;
    lastName: string;
    login: string;
    birthDate: string;
    password: string;
}