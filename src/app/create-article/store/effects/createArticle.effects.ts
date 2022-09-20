import { HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs"
import { catchError, map, switchMap, tap } from "rxjs/operators"
import { ArticleService } from "src/app/shared/service/article.service"
import { ArticleInterface } from "src/app/shared/types/article.interface"
import { createArticleAction, createArticleActionFailure, createArticleActionSuccess } from "../createArticle.actions"


@Injectable()
export class ArticleCreateEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({articleInput}) => {
        return this.articleService.createArticle(articleInput).pipe(
          map((article: ArticleInterface) => {
            return createArticleActionSuccess({ article })
          }),
          catchError((error: HttpErrorResponse) => {
            return of(createArticleActionFailure({errors: error.error.errors}))
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(() => this.actions$.pipe(
    ofType(createArticleActionSuccess),
    tap(({article}) => {
      this.router.navigate(['/articles', article.slug])
    })
  ), { dispatch: false })


  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router : Router
  ) { }
}
