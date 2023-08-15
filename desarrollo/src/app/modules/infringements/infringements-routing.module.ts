import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfringementFormComponent } from './components/infringement-form/infringement-form.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';

const routes: Routes = [
  {
    path: '',
    component: FormPageComponent,
    children: [
      {
        path: '',
        component: DataEntryComponent
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('../../error-pages/error-pages.module').then(m => m.ErrorPagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfringementsRoutingModule { }
