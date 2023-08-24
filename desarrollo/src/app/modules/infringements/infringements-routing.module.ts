import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { PathConstants } from 'src/app/shared/constants/paths-constants';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryGuard } from './guards/history/history.guard';

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
    path: PathConstants.INFRINGEMENTS_HISTORY,
    component: HistoryPageComponent,
    canActivate: [HistoryGuard],
    children: [
      {
        path: '',
        component: HistoryComponent
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
