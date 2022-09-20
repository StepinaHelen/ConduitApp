import { createAction, props } from "@ngrx/store"
import { ArticleInputI, ArticleInterface } from "src/app/shared/types/article.interface"
import { backEndErrorsInterface } from "src/app/shared/types/backEndErrors.interface"

export const createArticleAction = createAction(
  '[Create Article] Create Article',
  props<{ articleInput: ArticleInputI }>()
)
export const createArticleActionSuccess = createAction(
  '[Create Article] Create Article Success',
  props<{ article: ArticleInterface }>()
)
export const createArticleActionFailure = createAction(
  '[Create Article] Create Article Failure',
  props<{ errors: backEndErrorsInterface }>()
)