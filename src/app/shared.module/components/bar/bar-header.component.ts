import { Component, Inject, OnInit, SimpleChanges, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bar-header',
  styleUrls: ['./bar-header.component.scss'],
  template: `
    <div (click)="onToggle()" class="sub-bar-header-item">
      <ng-container *ngIf="title">{{title}}</ng-container>
      <ng-content *ngIf="!title"></ng-content>
    </div>
  `
})
export class BarHeaderComponent implements OnInit {
  @Input() title = false;
  @Input() active = false;
  @Input() editMode = false;
  @Input() isCustom = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @Output() activated: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    if (this.active) {
      this.activated.emit();
    }
  }

  onToggle(){
    if(this.isCustom == false){
      this.active = !this.active;
      this.toggle.emit();
      if (this.active) {
        this.activated.emit();
      }
    }
  }
}
