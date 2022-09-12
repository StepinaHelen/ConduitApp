import {createAction, props} from "@ngrx/store"
import { GetFeedResponseInterface } from "src/app/shared/types/getFeedResponse.interface"
import { ActionTypes} from "../actionsType"

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{url: string}>()
)
export const getFeedActionSuccess = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{feed: GetFeedResponseInterface}>()
)
export const getFeedActionFailure = createAction(
  ActionTypes.GET_FEED_FAILURE)
