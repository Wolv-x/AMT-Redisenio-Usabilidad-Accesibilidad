import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';

@NgModule({
  declarations: [],
  declarations: [
    MainNavComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild(),
    RouterModule
  ],
  ]
})
export class SharedModule { }
