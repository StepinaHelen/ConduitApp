import { createSelector } from "@ngrx/store"
import { AppStateInterface } from "src/app/shared/types/appState.interface"
import { CreateArticleStateInterface } from "src/app/shared/types/articleState.interface"

export const createArticleFeatureSelector = (
  state: AppStateInterface
): CreateArticleStateInterface => state.createArticle

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors
)