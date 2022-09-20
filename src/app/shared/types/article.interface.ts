import { ProfileInterface } from "./profile.interface"

export interface ArticleInterface {
  author: ProfileInterface
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  tagList: string[]
  title: string
  updatedAt: string
}


export interface ArticleResponseI {
  article: ArticleInterface
}

export interface ArticleInputI {
  tagList: string[],
  title: string,
  description: string,
  body: string
}
