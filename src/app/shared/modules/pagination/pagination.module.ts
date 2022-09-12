import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { UtilsService } from '../../service/utils.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PaginationComponent],
  providers: [UtilsService]
})
export class PaginationModule { }
