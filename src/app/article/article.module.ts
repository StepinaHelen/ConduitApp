import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { ArticleService } from '../shared/service/article.service';
import { ListOfTagsModule } from '../shared/modules/list-of-tags/list-of-tags.module';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';

const routes = [{
  path: 'articles/:slug',
  component: ArticleComponent
}]


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule, EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    // RouterModule,
    ListOfTagsModule,
    RouterModule.forChild(routes), ErrorMessageModule, LoadingModule,
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
