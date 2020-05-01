import { ParentCreationModel } from './parent.model';
import { StudentCreationModel } from './student.model';

export class ParentStudentCreationModel{
    parent: ParentCreationModel;
    student: StudentCreationModel;

    constructor(){
        this.parent = new ParentCreationModel();
        this.student = new StudentCreationModel();
    }
}