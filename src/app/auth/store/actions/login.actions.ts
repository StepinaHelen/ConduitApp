import { createAction, props } from "@ngrx/store"
import { backEndErrorsInterface } from "src/app/shared/types/backEndErrors.interface"
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface"
import { LoginRequestInterface } from "../../types/loginRequest.interface"
import { ActionTypes } from "../actionsType"

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
)
export const loginActionSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)
export const loginActionFailure = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: backEndErrorsInterface }>()
)