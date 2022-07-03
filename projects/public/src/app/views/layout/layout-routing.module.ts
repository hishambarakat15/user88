import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/services/guard/auth-guard.service';
// import { DynamicFormComponent } from '../reusable/dynamic-form/dynamic-form.component';
// import { WizardComponent } from '../reusable/wizard/wizard.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: 'users-approval', loadChildren: () => import('./users-approval/users-approval.module').then(m => m.UsersApprovalModule) },
    { path: 'lockUps', loadChildren: () => import('./look-ups/look-ups.module').then(m => m.LookUpsModule) },
    { path: 'carBrand', loadChildren: () => import('./lookups/car-brand/car-brand.module').then(m => m.CarBrandModule) },
    { path: 'governorates', loadChildren: () => import('./lookups/governorates/governorates.module').then(m => m.GovernoratesModule) },
    { path: 'employmentTypes', loadChildren: () => import('./lookups/employment-types/employment-types.module').then(m => m.EmploymentTypesModule) },
    { path: 'clubIds', loadChildren: () => import('./lookups/club-ids/club-ids.module').then(m => m.ClubIdsModule) },

    // { path: 'question-bank', component: QuestionBankComponent },
    // { path: 'wizard', component: WizardComponent },
    // { path: 'dynamic-form', component: DynamicFormComponent },
    
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
