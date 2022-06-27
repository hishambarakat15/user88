import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component';
import { UsersApprovalComponent } from './users-approval.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  // { path: '', component: UsersApprovalComponent },
  {path:'' , component: UsersApprovalComponent , children: [
    { path: '', component: UsersListComponent },
    { path: 'user-item/:id', component: UserItemComponent },
  
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersApprovalRoutingModule { }
