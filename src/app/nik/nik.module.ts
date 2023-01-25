import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorComponent } from './bor/bor.component';



@NgModule({
  declarations: [
    BorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BorComponent 
  ]
})
export class NikModule { }
