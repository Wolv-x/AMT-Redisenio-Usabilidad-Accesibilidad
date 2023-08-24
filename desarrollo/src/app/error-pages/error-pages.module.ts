import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ErrorPagesRoutingModule,
    TranslateModule.forChild()
  ]
})
export class ErrorPagesModule { }
