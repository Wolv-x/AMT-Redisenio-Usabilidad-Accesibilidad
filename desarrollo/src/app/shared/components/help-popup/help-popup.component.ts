import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isMobileViewport } from 'src/utils/responsive-utils';

@Component({
  selector: 'app-help-popup',
  templateUrl: './help-popup.component.html',
  styleUrls: ['./help-popup.component.less']
})
export class HelpPopupComponent {
  popupVisible = false;

  constructor(public translate: TranslateService) { }

  togglePopup(): void {
    this.popupVisible = !this.popupVisible;
    if(isMobileViewport()){
      document.body.classList.add('noscroll');
    }
  }

  closePopup(): void {
    this.popupVisible = false;
    if(isMobileViewport()){
      document.body.classList.remove('noscroll');
    }
  }
}
