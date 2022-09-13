import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './your-feed.component';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
]

@NgModule({
  declarations: [
    YourFeedComponent
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
export class YourFeedModule { }
