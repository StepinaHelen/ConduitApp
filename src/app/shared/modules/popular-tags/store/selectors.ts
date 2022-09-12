import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AppStateInterface } from "src/app/shared/types/appState.interface"
import { PopularTagsStateI } from "../types/popularTagsState.interface"


export const tagsFeatureSelector = (
  state: AppStateInterface
): PopularTagsStateI => state.tags

export const tagsSelector = createSelector(
  tagsFeatureSelector,
  (tagsState: PopularTagsStateI) => tagsState.data
)

export const isLoadingTagsSelector = createSelector(
  tagsFeatureSelector,
  (tagsState: PopularTagsStateI) => tagsState.isLoading
)

export const errorTagsSelector = createSelector(
  tagsFeatureSelector,
  (tagsState: PopularTagsStateI) => tagsState.error
)

