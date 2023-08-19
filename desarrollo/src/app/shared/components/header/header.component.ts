import { Component } from '@angular/core';
import { assetsConstants } from '../../constants/assets-constants';
import { TranslateService } from '@ngx-translate/core';
import { isMobileViewport } from '../../../../utils/responsive-utils'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  logoURL: string = assetsConstants.LOGO_URL + 'light-logo.svg';

  constructor(public translate: TranslateService) {
  }

  isMobileViewport(): boolean {
    return isMobileViewport();
  }
}
