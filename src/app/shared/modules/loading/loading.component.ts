import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'conduit-loading',
  template: '<div>Loading...</div>',
})
export class LoadingComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
