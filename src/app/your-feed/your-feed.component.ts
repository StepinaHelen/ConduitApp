import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { currentUserSelector } from '../auth/store/selectors';
import { CurrentUserInterface } from '../shared/types/currentUser.interface';

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.scss']
})
export class YourFeedComponent implements OnInit {
  apiUrl: string;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.pipe(select(currentUserSelector)).subscribe((user: CurrentUserInterface) => {
      if (user) {
        this.apiUrl = `/articles?author=${user.username}`;
      } else {
        this.apiUrl = '/articles/feed'
      }
    })
  }

}
