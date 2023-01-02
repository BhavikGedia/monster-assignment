import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';


@NgModule({
  declarations: [
    DetailsComponent,
    AddUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ]
})
export class DetailsModule { }
