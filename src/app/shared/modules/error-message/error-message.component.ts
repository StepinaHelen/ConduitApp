import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'conduit-error-message',
  template: '<div>{{messageError}}</div>',
})
export class ErrorMessageComponent implements OnInit {
  @Input() messageError: string='Something went wrong';
  constructor() { }

  ngOnInit(): void {
  }

}
