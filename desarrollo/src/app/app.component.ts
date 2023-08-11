import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { LanguageConfig, getSupportedLanguageCodes } from 'src/config/language-config';
import { ActivatedRoute } from '@angular/router';
import { ParamConstants } from './shared/constants/params-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const supportedLanguageCodes = getSupportedLanguageCodes();
    this.translate.addLangs(supportedLanguageCodes);
    this.translate.setDefaultLang(LanguageConfig.DEFAULT_LANGUAGE);
    this.route.params.subscribe((params) => {
      this.translate.use(params[ParamConstants.LANGUAGE]);
    });
    this.document.documentElement.lang = this.translate.currentLang;
  }
}
