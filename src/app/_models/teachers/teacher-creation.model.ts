import { User } from '../user';
import { UserType } from 'src/app/_enums/UserType';



export class TeacherCreationModel{
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    birthDate: string;
    userType: UserType;
    password: string;
}