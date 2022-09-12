import { createAction, props } from "@ngrx/store"
import { backEndErrorsInterface } from "src/app/shared/types/backEndErrors.interface"
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface"
import { RegisterRequestInterface } from "../../types/registerRequest.interface"
import { ActionTypes } from "../actionsType"

export const registerAction = createAction(
  // '[Auth] Register',
  //  props<{ password: string, email: string,username: string }>
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)
export const registerActionSuccess = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)
export const registerActionFailure = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: backEndErrorsInterface }>()
)
