import {createAction, props} from "@ngrx/store"
import { ActionTypes} from "../actionsType"

export const deleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE,
  props<{slug: string}>()
)
export const deleteArticleActionSuccess = createAction(
  ActionTypes.DELETE_ARTICLE_SUCCESS
)
export const deleteArticleActionFailure = createAction(
  ActionTypes.DELETE_ARTICLE_FAILURE)