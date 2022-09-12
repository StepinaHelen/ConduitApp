import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs"
import { catchError, map, switchMap } from "rxjs/operators"
import { PopularTagsService } from "src/app/shared/service/popular-tags.service"
import { popularTagsI } from "src/app/shared/types/popularTags.interface"
import { getPopularTagsAction, getPopularTagsActionFailure, getPopularTagsActionSuccess } from '../actions/popular-tags.actions'

@Injectable()
export class tagsEffect {
  tags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((tags: popularTagsI[]) => {
            return (getPopularTagsActionSuccess({ tags }))
          }),
          catchError(() => {
            return of(getPopularTagsActionFailure())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService,
  ) { }
}
