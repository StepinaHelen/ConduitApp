import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { popularTagsI } from '../types/popularTags.interface';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(private http: HttpClient) { }

  getPopularTags(): Observable<popularTagsI[]> {
    const url = environment.apiURL + '/tags'
    return this.http.get(url).pipe(map((resp: any) => {
      console.log(resp.tags)
      return resp.tags
    }))
  }


}
