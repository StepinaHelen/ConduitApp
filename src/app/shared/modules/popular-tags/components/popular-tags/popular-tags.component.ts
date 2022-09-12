import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { popularTagsI } from 'src/app/shared/types/popularTags.interface';
import { getPopularTagsAction } from '../../store/actions/popular-tags.actions';
import { tagsSelector,isLoadingTagsSelector, errorTagsSelector } from '../../store/selectors'

@Component({
  selector: 'conduit-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  tags$: Observable<popularTagsI[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.fetchData()
    this.initializeValues()
  }

  initializeValues() {
    this.tags$ = this.store.pipe(select(tagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingTagsSelector))
    this.error$ = this.store.pipe(select(errorTagsSelector))
  }
  fetchData() {
    this.store.dispatch(getPopularTagsAction())
  }

}
