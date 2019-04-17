import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartelComponent } from './cartel/cartel.component';

@NgModule({
  entryComponents:[
    CartelComponent
  ],
  declarations: [
    CartelComponent
  ],
  exports: [
    CartelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
