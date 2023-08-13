import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { LanguageConfig, getSupportedLanguageCodes } from 'src/config/language-config';
import { ActivatedRoute } from '@angular/router';
import { ParamsConstants } from './shared/constants/params-constants';

@Component({
  selector: 'app-language-init',
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class LanguageInitComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const supportedLanguageCodes = getSupportedLanguageCodes();
    this.translate.addLangs(supportedLanguageCodes);
    supportedLanguageCodes.forEach(code => {
      this.translate.reloadLang(code);
    })
    this.translate.setDefaultLang(LanguageConfig.DEFAULT_LANGUAGE);
    this.route.paramMap.subscribe(params => {
      const language = params.get(ParamsConstants.LANGUAGE);
      if (language) {
        this.document.documentElement.lang = language;
        this.translate.use(language);
      }
    });
  }
}
