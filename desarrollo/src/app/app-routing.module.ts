import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParamsConstants } from './shared/constants/params-constants';
import { LanguageGuard } from './shared/guards/language/language.guard';
import { PathConstants } from './shared/constants/paths-constants';
import { LanguageConfig } from 'src/config/language-config';
import { LanguageInitComponent } from './language-init.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: LanguageConfig.DEFAULT_LANGUAGE,
        pathMatch: 'full'
      },
      {
        path: ':' + ParamsConstants.LANGUAGE,
        canActivate: [LanguageGuard],
        component: LanguageInitComponent,
        children: [
          {
            path: '',
            redirectTo: PathConstants.CONSULTATIONS,
            pathMatch: 'full'
          },
          {
            path: PathConstants.CONSULTATIONS,
            loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule)
          },
          {
            path: '**',
            loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
