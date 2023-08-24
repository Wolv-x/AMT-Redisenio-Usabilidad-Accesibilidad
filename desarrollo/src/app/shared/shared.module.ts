import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ButtonComponent } from './components/button/button.component';
import { HelpPopupComponent } from './components/help-popup/help-popup.component';
import { NavFooterTemplate} from './templates/nav-footer-template/nav-footer-template.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { SimpleHeaderTemplate } from './templates/simple-header-template/simple-header-template.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumsComponent } from './components/breadcrums/breadcrums.component';

@NgModule({
  declarations: [
    LanguagePickerComponent,
    MainNavComponent,
    ButtonComponent,
    HelpPopupComponent,
    NavFooterTemplate,
    FooterComponent,
    HeaderNavComponent,
    SimpleHeaderTemplate,
    HeaderComponent,
    BreadcrumsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild(),
    RouterModule
  ],
  exports: [
    NavFooterTemplate,
    SimpleHeaderTemplate,
    ButtonComponent,
    BreadcrumsComponent
  ]
})

export class SharedModule { }
