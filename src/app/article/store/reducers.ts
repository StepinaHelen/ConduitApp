import { routerNavigationAction } from "@ngrx/router-store"
import { Action, createReducer, on } from "@ngrx/store"
import { ArticleStateInterface } from "src/app/shared/types/articleState.interface"

import {
  getArticleAction,
  getArticleActionFailure,
  getArticleActionSuccess,
} from "./actions/getArticle.action"

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleActionSuccess,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleActionFailure,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    routerNavigationAction,
    (): ArticleStateInterface => initialState
  )
)

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}