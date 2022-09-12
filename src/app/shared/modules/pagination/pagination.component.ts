import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../service/utils.service';

@Component({
  selector: 'conduit-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() total: number;
  @Input() limit: number;
  @Input() url:string;
  @Input() currentPage: number;
  pagesCount: number;
  pages:number[]
  constructor(private utilService: UtilsService) { }

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit)
   
    this.pages = this.utilService.range(1, this.pagesCount)
    
  }

}
