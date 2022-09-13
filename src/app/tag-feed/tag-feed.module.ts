import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './tag-feed.component';
import { RouterModule } from '@angular/router';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent
  }
]

@NgModule({
  declarations: [
    TagFeedComponent
  ],
  imports: [
    CommonModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
    FeedModule,
    RouterModule.forChild(routes),
  ]
})
export class TagFeedModule { }
