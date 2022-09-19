import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs"
import { catchError, map, switchMap } from "rxjs/operators"
import { getArticleAction, getArticleActionFailure, getArticleActionSuccess } from "../actions/getArticle.action"
import { ArticleService as SharedArticleService } from "src/app/shared/service/article.service"

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.geArticle(slug).pipe(
          map((article) => {
            return getArticleActionSuccess({ article })
          }),
          catchError(() => {
            return of(getArticleActionFailure())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private sharedArticleService: SharedArticleService) { }
}
