import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ArticleInterface, GetArticleResponseInterface } from '../types/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  geArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiURL}/articles/${slug}`
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(map((res: GetArticleResponseInterface) => res.article))
  }

  deleteArticle(slug: string) {
    const fullUrl = `${environment.apiURL}/articles/${slug}`
    return this.http.delete<{}>(fullUrl)
  }
}
