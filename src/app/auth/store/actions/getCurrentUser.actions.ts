import {createAction, props} from "@ngrx/store"
import { backEndErrorsInterface } from "src/app/shared/types/backEndErrors.interface"
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface"
import { LoginRequestInterface } from "../../types/loginRequest.interface"
import {ActionTypes} from "../actionsType"

export const getCurrentUserAction = createAction(
  ActionTypes.GET_CURRENT_USER
)
export const getCurrentUserActionSuccess = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser:CurrentUserInterface}>()
)
export const getCurrentUserActionFailure = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
)

