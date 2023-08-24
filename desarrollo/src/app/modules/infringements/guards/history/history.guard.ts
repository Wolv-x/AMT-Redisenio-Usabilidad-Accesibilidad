import { IdentificationService } from './../../services/identification.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathConstants } from 'src/app/shared/constants/paths-constants';

@Injectable({
  providedIn: 'root'
})
export class HistoryGuard {

  constructor(private identificationService: IdentificationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.identificationService.getIdentification().pipe(
      map(identification => {
        if (this.identificationService.isEmptyIdentification()) {
          const formUrl = state.url.replace(`/${PathConstants.INFRINGEMENTS_HISTORY}`, '');
          return this.router.parseUrl(formUrl);
        } else {
          return true;
        }
      })
    );
  }
}
