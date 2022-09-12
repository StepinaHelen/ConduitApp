//делает вызов сервиса и диспачит экшины
// switchMap- позвляет сделать какую то трансформацию
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap,tap } from "rxjs/operators";
import { PersistanceService } from "src/app/shared/service/persistance.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerActionFailure, registerActionSuccess } from "../actions/register.action";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        // возвращает Action
        switchMap(({ request }) => {
            return this.authService.register(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    this.persistanceService.set('accessToken', currentUser.token)
                    return registerActionSuccess({currentUser})
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(registerActionFailure({errors:errorResponse.error.errors}))
                })
            )
        })
    ))
    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(registerActionSuccess),
        tap(() => {
            this.router.navigateByUrl('/')
        })
        // если мы не хотим что то dispatch и у нас не возвращается Action
    ), {dispatch:false})

    
    constructor(private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private persistanceService: PersistanceService) { }
}