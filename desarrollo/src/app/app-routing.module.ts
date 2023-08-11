import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-pages/pages/page-not-found/page-not-found.component';
import { ParamConstants } from './shared/constants/params-constants';
import { LanguageConfig } from 'src/config/language-config';
import { LanguageGuard } from './shared/guards/language/language.guard';

const appRoutes: Routes = [
  {
    path: ':' + ParamConstants.LANGUAGE,
    loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule),
    canActivate: [LanguageGuard]
  },
  {
    path: '',
    redirectTo: LanguageConfig.DEFAULT_LANGUAGE,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
