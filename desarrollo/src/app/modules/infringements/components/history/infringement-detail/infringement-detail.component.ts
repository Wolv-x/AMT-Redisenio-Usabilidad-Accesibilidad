import { formatCurrency } from 'src/utils/formatting-utils';
import { Component, OnInit } from '@angular/core';
import { Infringement } from '../../../models/infringement';
import { PopupStateService } from '../../../services/popup-state.service';

@Component({
  selector: 'app-infringement-detail',
  templateUrl: './infringement-detail.component.html',
  styleUrls: ['./infringement-detail.component.less']
})
export class InfringementDetailComponent implements OnInit{
  
  formatCurrency = formatCurrency;
  public infringement: Infringement = {} as Infringement;
  public isVisible = true;

  constructor(public popupStateService: PopupStateService) {
    this.popupStateService.infringement$.subscribe(infringement => {
      this.infringement = infringement
    })
    this.popupStateService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible
    })
  }

  ngOnInit(): void {
    this.popupStateService.isVisible$.subscribe(isVisible => {
      if (isVisible) {
        document.body.classList.add('noscroll');
      } else {
        document.body.classList.remove('noscroll');
      }
    });
  }

  close(): void {
    this.popupStateService.hidePopup()
  }
}
