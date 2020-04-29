import {
  Component, Inject, OnInit, SimpleChanges, ViewChild, Input, Output,
  EventEmitter, ElementRef, QueryList, ContentChildren, AfterContentInit
} from '@angular/core';
import { BarItemComponent } from './bar-item.component';
import { BarHeaderComponent } from './bar-header.component';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements AfterContentInit {

  @ContentChildren(BarItemComponent) tabs: QueryList<BarItemComponent>;
  @ContentChildren(BarHeaderComponent) headers: QueryList<BarHeaderComponent>;

  ngAfterContentInit() {
    let activeHeaders = this.headers.filter((tab) => tab.active);

    if (activeHeaders.length === 0) {
      this.selectHeader(this.headers.first);
    }

    this.headers.forEach(h => {
      h.toggle.subscribe(() => {
        this.selectHeader(h);
      });
    });
  }

  selectTab(header: any) {
    if (this.headers.toArray().indexOf(header) >= 0) {
      this.selectHeader(header);
    }
  }

  selectHeader(header: BarHeaderComponent) {
    this.tabs.forEach(tab => tab.active = false);
    this.headers.forEach(h => h.active = false);

    header.active = true;
    header.editMode = false;
    let index = this.headers.toArray().indexOf(header);
    this.tabs.toArray()[index].active = true;
  }

  toggleEdit(editMode: boolean) {
    this.headers.forEach(header => {
      if (header.active === true) {
        header.editMode = editMode;
      }
    });
  }

  getSelectedHeader() {
    if (this.headers.toArray().find(x => x.active) != null) {
      return this.headers.toArray().find(x => x.active);
    }
  }

}
