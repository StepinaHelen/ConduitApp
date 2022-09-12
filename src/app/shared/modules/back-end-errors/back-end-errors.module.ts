import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackEndErrorsComponent } from './back-end-errors.component';




@NgModule({
  declarations: [
    BackEndErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[BackEndErrorsComponent]
})
export class BackEndErrorsModule { }
