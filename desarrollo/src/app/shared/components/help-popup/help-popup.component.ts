import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-help-popup',
  templateUrl: './help-popup.component.html',
  styleUrls: ['./help-popup.component.less']
})
export class HelpPopupComponent {
  popupVisible = false;

  constructor(public translate: TranslateService) {}

  togglePopup(): void {
    this.popupVisible = !this.popupVisible;
  }

  closePopup(): void {
    this.popupVisible = false;
  }
}
