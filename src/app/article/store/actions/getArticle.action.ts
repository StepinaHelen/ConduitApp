import {createAction, props} from "@ngrx/store"
import { ArticleInterface } from "src/app/shared/types/article.interface"
import { ActionTypes} from "../actionsType"

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{slug: string}>()
)
export const getArticleActionSuccess = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
)
export const getArticleActionFailure = createAction(
  ActionTypes.GET_ARTICLE_FAILURE)
