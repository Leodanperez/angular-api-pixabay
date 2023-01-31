import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselComponent} from "./carousel/carousel.component";
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';



@NgModule({
  declarations: [
    //CarouselComponent,
    FeatherIconsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //CarouselComponent,
    FeatherIconsComponent
  ]
})
export class SharedModule { }
