import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersApprovalRoutingModule } from './users-approval-routing.module';
import { UsersApprovalComponent } from './users-approval.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserItemComponent } from './user-item/user-item.component';


@NgModule({
  declarations: [
    UsersApprovalComponent,
    UsersListComponent,
    UserItemComponent
  ],
  imports: [
    CommonModule,
    UsersApprovalRoutingModule
  ]
})
export class UsersApprovalModule { }
