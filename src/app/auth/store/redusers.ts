import { Action, createReducer, on } from "@ngrx/store"
import { AuthStateInterface } from "../types/authState.interface"
import {
  getCurrentUserAction,
  getCurrentUserActionFailure,
  getCurrentUserActionSuccess,
} from "./actions/getCurrentUser.actions"
import {
  loginAction,
  loginActionFailure,
  loginActionSuccess,
} from "./actions/login.actions"
import {
  registerAction,
  registerActionFailure,
  registerActionSuccess,
} from "./actions/register.action"

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerActionSuccess,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(
    registerActionFailure,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginActionSuccess,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(
    loginActionFailure,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserActionSuccess,
    (state, action): AuthStateInterface => ({
      ...state,
      currentUser: action.currentUser,
      isLoading: false,
      isLoggedIn: true,
    })
  ),
  on(
    getCurrentUserActionFailure,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
