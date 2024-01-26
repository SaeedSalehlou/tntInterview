import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './ui-kit/prime-ng/prime-ng.module';
import { MaterialUiModule } from './ui-kit/material-ui/material-ui.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeNgModule,
    MaterialUiModule
  ],
  exports: [
    PrimeNgModule,
    MaterialUiModule
  ]
})
export class SharedModule { }
