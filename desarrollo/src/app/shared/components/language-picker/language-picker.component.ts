import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Language, LanguageConfig } from 'src/config/language-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.less'],
})
export class LanguagePickerComponent implements OnInit {
  availableLanguages: Record<string, Language> = {};
  languageOptionsVisible = false; // Agrega esta variable

  constructor(public translate: TranslateService, private router: Router) { }

  ngOnInit(): void {
    this.availableLanguages = LanguageConfig.LANGUAGES;
  }

  toggleLanguageOptions(): void {
    this.languageOptionsVisible = !this.languageOptionsVisible;
  }

  setLanguage(language: string): void {
    this.translate.use(language);
    const currentUrlTree = this.router.parseUrl(this.router.url);
    currentUrlTree.root.children['primary'].segments[0].path = language;
    this.router.navigateByUrl(currentUrlTree);
    this.languageOptionsVisible = false;
  }
}
