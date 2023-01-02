import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DetailsComponent } from './details.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: 'add', component: AddUserComponent },
  { path: ':id', component: ViewUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
