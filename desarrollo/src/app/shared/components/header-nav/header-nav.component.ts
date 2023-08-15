import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { assetsConstants } from '../../constants/assets-constants';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.less']
})
export class HeaderNavComponent {
  logoURL: string = assetsConstants.LOGO_URL + 'light-logo.svg';
  constructor(public translate: TranslateService) {
    
  }
}
