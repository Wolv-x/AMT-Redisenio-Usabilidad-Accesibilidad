import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [],
  declarations: [
    LanguagePickerComponent,
    MainNavComponent,
    ButtonComponent,
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
