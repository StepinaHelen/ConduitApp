import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetFeedResponseInterface } from '../../../types/getFeedResponse.interface';
import { getFeedAction } from '../store/actions/getFeed.action';
import { errorSelector, feedSelector, isLoadingSelector } from '../store/selectors';
import { parseUrl, stringify } from 'query-string';
import { FeedService } from 'src/app/shared/service/feed.service';

@Component({
  selector: 'conduit-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit, OnChanges {
  @Input() apiUrl: string;
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  initialFeed$: Observable<GetFeedResponseInterface | null>
  feed$: Observable<GetFeedResponseInterface | null>
  limit = environment.limit
  url: string
  currentPage: number
  feedMount: number = 15;

  constructor(private store: Store, private router: Router,
    private route: ActivatedRoute, private feedService: FeedService) { }
  
  
  ngOnChanges(changes: SimpleChanges): void {
    const isApiChanged = !changes.apiUrl.firstChange && changes.apiUrl.currentValue !== changes.apiUrl.previousValue
    if (isApiChanged) {
      this.fetchFeed()
    }
  }

  ngOnInit(): void {
    // this.feedService.getFeed('/articles?limit=15').subscribe(data => {
    //   this.feedMount = data.articlesCount;
    // })
    this.initializeValues()
    this.initializaListeners()
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit

    const parsedUrl = parseUrl(this.apiUrl)
    const stringifiedParams = stringify({
      // limit: this.limit,
      // offset,
      ...parsedUrl.query
    })

    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
    // this.store.dispatch(getFeedAction({ url: parsedUrl.url }))
  }


  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.url = this.router.url.split('?')[0]
    
  }

  initializaListeners() {
    this.route.queryParams.subscribe(((params: Params) => {
      this.currentPage = Number(params.page || '1')
      this.fetchFeed()
    }))
  }

}
