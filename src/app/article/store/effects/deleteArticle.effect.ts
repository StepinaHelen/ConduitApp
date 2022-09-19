import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs"
import { catchError, map, switchMap, tap } from "rxjs/operators"
import { ArticleService as SharedArticleService } from "src/app/shared/service/article.service"
import { deleteArticleAction, deleteArticleActionSuccess, deleteArticleActionFailure } from "../actions/deleteArticle.actions"

@Injectable()
export class DeleteArticleEffect {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleActionSuccess()
          }),
          catchError(() => {
            return of(deleteArticleActionFailure())
          })
        )
      })
    )
  )

  redirectAfterDelete$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteArticleActionSuccess),
      tap(() => {
        this.router.navigate(['/'])
      })
    ),
    { dispatch: false } // чтобы страница не зависла 
  )

  constructor(private actions$: Actions, private sharedArticleService: SharedArticleService,
    private router: Router) { }
}