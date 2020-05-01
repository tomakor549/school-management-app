import { User } from '../user';
import { UserType } from 'src/app/_enums/UserType';


export class ParentModel extends User{

}

export class ParentCreationModel{
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    birthDate: string;
    password: string;
}