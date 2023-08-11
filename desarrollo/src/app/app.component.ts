import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageConfig, getSupportedLanguageCodes } from 'src/config/language-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(getSupportedLanguageCodes());
    translate.setDefaultLang(LanguageConfig.DEFAULT_LANGUAGE);
  }
}
