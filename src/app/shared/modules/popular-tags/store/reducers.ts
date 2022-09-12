import {Action, createReducer, on} from "@ngrx/store"
import { PopularTagsStateI } from "../types/popularTagsState.interface"
import {
  getPopularTagsAction, getPopularTagsActionSuccess,
getPopularTagsActionFailure} from './actions/popular-tags.actions'

const initialState: PopularTagsStateI = {
  isLoading: false,
  error: null,
  data: null,
}

const tagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateI => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsActionSuccess,
    (state, action): PopularTagsStateI => ({
      ...state,
      isLoading: false,
      data: action.tags,
    })
  ),
  on(
    getPopularTagsActionFailure,
    (state): PopularTagsStateI => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: PopularTagsStateI, action: Action) {
    return tagsReducer(state, action)
}