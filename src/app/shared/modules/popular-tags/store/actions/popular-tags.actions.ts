import {createAction, props} from "@ngrx/store"
import { popularTagsI } from "src/app/shared/types/popularTags.interface"
import { ActionTypes } from "./actionsTypes"

export const getPopularTagsAction = createAction(
  ActionTypes.GET_TAGS
)
export const getPopularTagsActionSuccess = createAction(
  ActionTypes.GET_TAGS_SUCCESS,
  props<{tags: popularTagsI[]}>()
)
export const getPopularTagsActionFailure = createAction(
  ActionTypes.GET_TAGS_FAILURE
)