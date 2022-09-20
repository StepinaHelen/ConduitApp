import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackEndErrorsModule } from '../back-end-errors/back-end-errors.module';



@NgModule({
  declarations: [
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackEndErrorsModule
  ],
  exports:[ArticleFormComponent]
})
export class ArticleFormModule { }
