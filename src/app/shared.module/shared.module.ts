import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as shared from './index'

@NgModule({
  declarations: [
    shared.BarComponent,
    shared.BarHeaderComponent,
    shared.BarItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    shared.BarComponent,
    shared.BarHeaderComponent,
    shared.BarItemComponent
  ]
})
export class SharedModule { }
