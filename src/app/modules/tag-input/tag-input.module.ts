import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputComponent } from './tag-input/tag-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TagInputComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TagInputComponent
  ]
})
export class TagInputModule { }
