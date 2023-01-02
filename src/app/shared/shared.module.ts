import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LowercasePipe } from './lowercase.pipe';
import { UserformComponent } from './userform/userform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToTopDirective } from './scroll-to-top.directive';



@NgModule({
  declarations: [
    CardComponent,
    LowercasePipe,
    UserformComponent,
    ScrollToTopDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CardComponent,
    UserformComponent,
    ReactiveFormsModule,
    ScrollToTopDirective
  ]
})
export class SharedModule { }
