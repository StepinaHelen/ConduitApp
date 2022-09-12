import { Component, Input, OnInit } from '@angular/core';
import { backEndErrorsInterface } from 'src/app/shared/types/backEndErrors.interface';

@Component({
  selector: 'conduit-back-end-errors',
  templateUrl: './back-end-errors.component.html',
  styleUrls: ['./back-end-errors.component.scss']
})
export class BackEndErrorsComponent implements OnInit {
  @Input('backEndErrors') backEndErrorsProps: backEndErrorsInterface; 
  errorsBackEnd: string[];
  constructor() { }

  ngOnInit(): void {
    this.errorsBackEnd = Object.keys(this.backEndErrorsProps).map(name => {
      const error = this.backEndErrorsProps[name].join(', ')
      return `${name} ${error}`
    })
  }

}
