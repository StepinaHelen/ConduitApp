import { ArticleInterface } from "./article.interface"

export interface ArticleStateInterface {
  data: ArticleInterface | null
  error: string | null
  isLoading: boolean
}