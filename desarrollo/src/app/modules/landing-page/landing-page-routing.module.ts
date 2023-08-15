import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PageNotFoundComponent } from 'src/app/error-pages/pages/page-not-found/page-not-found.component';
import { ServicesComponent } from './components/services/services.component';
import { PathConstants } from 'src/app/shared/constants/paths-constants';

const routes: Routes = [
  {
    path: PathConstants.INFRINGEMENTS_AMT,
    loadChildren: () => import('../infringements/infringements.module').then(m => m.InfringementsModule)
  },
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: ServicesComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
