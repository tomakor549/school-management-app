import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseModel } from 'src/app/_models/courses/course.model';
import { CoursesService } from 'src/app/_services/courses/courses.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() coursesList: CourseModel[];
  @Output() dataStateChanged: EventEmitter<any> = new EventEmitter()

  public formGroup: FormGroup;
  public editedRowIndex: number;

  private editMode:boolean;

  constructor(private coursesService: CoursesService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    this.editMode=true;

    this.formGroup = new FormGroup({
      'id': new FormControl(dataItem.id),
      'name': new FormControl(dataItem.name, [Validators.required, Validators.minLength(3)]),
    });

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public addHandler({sender}) {
    this.closeEditor(sender);
    this.editMode=false;

    this.formGroup = new FormGroup({
      'id': new FormControl(),
      'name': new FormControl([Validators.required, Validators.minLength(3)]),
    });

    sender.addRow(this.formGroup);
}

  public saveHandler({ sender, rowIndex, formGroup, isNew }) {
    const course: CourseModel = formGroup.value;

    if(isNew)
    {
      this.coursesService.addCourse(course).subscribe(course=>{
        this.dataStateChanged.emit();
        console.log(course);
      });
    }else{
      this.coursesService.updateCourse(course).subscribe(course=>{
        this.dataStateChanged.emit();
        console.log(course);
      });;
    }

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }) {
    this.coursesService.deleteCourse(dataItem).subscribe(resp=>{
      console.log(resp);
    });
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

}
