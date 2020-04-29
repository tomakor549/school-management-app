import { Component, Inject, OnInit, SimpleChanges, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bar-item',
  template: `
    <div *ngIf="active==true" class="sub-bar__panel" [class.sub-bar__panel--active]="active">
      <ng-content></ng-content>
    </div>
  `
})
export class BarItemComponent {
  @Input() active = false;
}
