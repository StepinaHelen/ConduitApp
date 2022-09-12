import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs"
import { catchError, map, switchMap } from "rxjs/operators"
import { PersistanceService } from "src/app/shared/service/persistance.service"
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface"
import { AuthService } from "../../services/auth.service"
import {
  getCurrentUserAction,
  getCurrentUserActionFailure,
  getCurrentUserActionSuccess,
} from "../actions/getCurrentUser.actions"

@Injectable()
export class CurrentUserEffect {
  currentUsert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get("accessToken")
        if (!token) {
          return of(getCurrentUserActionFailure())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserActionSuccess({ currentUser })
          }),
          catchError(() => {
            return of(getCurrentUserActionFailure())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) { }
}
