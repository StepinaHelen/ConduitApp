import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {  combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { currentUserSelector } from '../auth/store/selectors';
import { ArticleInterface } from '../shared/types/article.interface';
import { CurrentUserInterface } from '../shared/types/currentUser.interface';
import { deleteArticleAction } from './store/actions/deleteArticle.actions';
import { getArticleAction } from './store/actions/getArticle.action';
import { articleSelector, errorSelector, isLoadingSelector } from './store/selectors';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string;
  article: ArticleInterface | null;
  articleSubscription: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  isAuthor$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest([this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))]).pipe(map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {
        if (!article || !currentUser) {
        return false
        } else {
          return article.author.username === currentUser.username
      }
    }))
  }

  initializeListeners(): void {
    this.articleSubscription = this.store.pipe(select(articleSelector)).subscribe((data: ArticleInterface | null) => {
      this.article = data
    })
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }))
  }

}
