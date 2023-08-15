import { Component } from '@angular/core';
import { assetsConstants } from '../../constants/assets-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  logoURL: string = assetsConstants.LOGO_URL + 'light-logo.svg';
}
