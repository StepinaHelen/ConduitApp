import { AuthStateInterface } from "src/app/auth/types/authState.interface"
import { PopularTagsStateI } from "../modules/popular-tags/types/popularTagsState.interface"
import { FeedStateInterface } from "./feedState.interface"

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  tags: PopularTagsStateI
}
