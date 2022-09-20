import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { EffectsModule } from '@ngrx/effects';
import { ArticleCreateEffect } from './store/effects/createArticle.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
]

@NgModule({
  declarations: [
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([ArticleCreateEffect]),
    StoreModule.forFeature('createArticle', reducers)
  ]
})
export class CreateArticleModule { }
