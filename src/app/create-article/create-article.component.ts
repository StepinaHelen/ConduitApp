import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticleInputI } from '../shared/types/article.interface';
import { backEndErrorsInterface } from '../shared/types/backEndErrors.interface';
import { createArticleAction } from './store/createArticle.actions';
import { isSubmittingSelector, validationErrorsSelector } from './store/selectors';

@Component({
  selector: 'conduit-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputI = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }
  isSubmitting$: Observable<boolean>;
  backEndErrors$: Observable<backEndErrorsInterface | null>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputI) {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
