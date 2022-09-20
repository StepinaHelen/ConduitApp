import { Action, createReducer, on } from "@ngrx/store";
import { CreateArticleStateInterface } from "src/app/shared/types/articleState.interface";
import { createArticleAction, createArticleActionFailure, createArticleActionSuccess } from "./createArticle.actions";

const initialState: CreateArticleStateInterface = {
  validationErrors: null,
  isSubmitting: false
}


const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state: CreateArticleStateInterface) => ({
    ...state,
    isSubmitting: true
  })
  ),

  on(createArticleActionSuccess, (state: CreateArticleStateInterface) => ({
    ...state,
    isSubmitting: false
  })
  ),

  on(createArticleActionFailure, (state: CreateArticleStateInterface, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })
  )
)

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action)
}