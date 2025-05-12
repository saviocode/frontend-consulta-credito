import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { SkeletonCardComponent } from './skeleton/skeleton-card.component';

@NgModule({
  imports: [
    CommonModule,
    SkeletonCardComponent  
  ],
  exports: [
    SkeletonCardComponent   
  ]
})
export class SharedModule {}
