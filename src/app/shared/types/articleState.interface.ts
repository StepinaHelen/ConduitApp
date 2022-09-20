import { ArticleInterface } from "./article.interface"
import { backEndErrorsInterface } from "./backEndErrors.interface"

export interface ArticleStateInterface {
  data: ArticleInterface | null
  error: string | null
  isLoading: boolean
}

export interface CreateArticleStateInterface {
  validationErrors: backEndErrorsInterface | null
  isSubmitting: boolean
}