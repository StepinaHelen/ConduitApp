import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { EffectsModule } from '@ngrx/effects';
import { tagsEffect } from './store/effects/popular-tags.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    CommonModule, EffectsModule.forFeature([tagsEffect]),
    StoreModule.forFeature('tags', reducers),
    LoadingModule,
    ErrorMessageModule,
    RouterModule
  ],
  exports:[PopularTagsComponent]
})
export class PopularTagsModule { }
