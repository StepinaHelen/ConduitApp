import {Injectable} from "@angular/core"
import {Actions, createEffect, ofType} from "@ngrx/effects"
import {of} from "rxjs"
import {catchError, map, switchMap, tap} from "rxjs/operators"
import {FeedService} from "src/app/shared/service/feed.service"
import {GetFeedResponseInterface} from "src/app/shared/types/getFeedResponse.interface"
import {
  getFeedAction,
  getFeedActionFailure,
  getFeedActionSuccess,
} from "../actions/getFeed.action"

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedActionSuccess({feed})
          }),
          catchError(() => {
            return of(getFeedActionFailure())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
