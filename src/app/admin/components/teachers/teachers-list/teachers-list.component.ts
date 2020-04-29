import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from 'src/app/_models/teachers/teacher.model';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit {

  @Input() gridData: Teacher[];
  public gridView: any[];

  public mySelection: string[] = [];

  public ngOnInit(): void {
    this.gridView = this.gridData;
  }

}
