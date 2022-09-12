import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'conduit-list-of-tags',
  templateUrl: './list-of-tags.component.html',
  styleUrls: ['./list-of-tags.component.scss']
})
export class ListOfTagsComponent implements OnInit {
  @Input() tags: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
