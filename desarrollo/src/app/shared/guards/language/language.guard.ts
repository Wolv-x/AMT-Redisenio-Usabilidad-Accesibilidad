import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ParamConstants } from '../../constants/params-constants';
import { LanguageConfig, getSupportedLanguageCodes } from 'src/config/language-config';

@Injectable({
  providedIn: 'root',
})
export class LanguageGuard {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const language: string = route.paramMap.get(ParamConstants.LANGUAGE) ?? LanguageConfig.DEFAULT_LANGUAGE;
    

    const supportedLanguages = getSupportedLanguageCodes();
    if (!supportedLanguages.includes(language)) {
      this.router.navigate([LanguageConfig.DEFAULT_LANGUAGE]);
      return false;
    }
    return true;
  }
}
