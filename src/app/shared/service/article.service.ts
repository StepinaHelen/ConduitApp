import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ArticleInputI, ArticleInterface, ArticleResponseI } from '../types/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  geArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiURL}/articles/${slug}`
    return this.http.get<ArticleResponseI>(fullUrl).pipe(map((res: ArticleResponseI) => res.article))
  }

  deleteArticle(slug: string): Observable<{}> {
    const fullUrl = `${environment.apiURL}/articles/${slug}`
    return this.http.delete<{}>(fullUrl)
  }

  createArticle(article: ArticleInputI): Observable<ArticleInputI> {
    const fullUrl = `${environment.apiURL}/articles`
    return this.http.post<ArticleResponseI>(fullUrl, { article }).pipe(map((res: ArticleResponseI) => res.article))
  }
}
