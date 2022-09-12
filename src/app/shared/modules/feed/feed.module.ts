import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './component/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { FeedService } from '../../service/feed.service';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ListOfTagsModule } from '../list-of-tags/list-of-tags.module';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule, EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule, ErrorMessageModule, LoadingModule,
    PaginationModule,
    ListOfTagsModule
  ],
  exports: [FeedComponent],
  providers:[FeedService]
  
})
export class FeedModule { }
