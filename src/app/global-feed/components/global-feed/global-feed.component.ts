import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from 'src/app/shared/types/getFeedResponse.interface';

@Component({
  selector: 'project-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = '/articles'
  constructor() { }

  ngOnInit(): void {
  }

}
