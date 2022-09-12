import { popularTagsI } from "src/app/shared/types/popularTags.interface";

export interface PopularTagsStateI {
  data: popularTagsI[] | null
  error: string | null
  isLoading: boolean
  
}