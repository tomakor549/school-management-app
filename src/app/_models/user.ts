import { UserType } from '../_enums/UserType';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    birthDate: Date;
    userType: UserType;
}