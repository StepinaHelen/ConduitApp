import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfTagsComponent } from './list-of-tags.component';



@NgModule({
  declarations: [
    ListOfTagsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ListOfTagsComponent]
})
export class ListOfTagsModule { }
