import { Component, HostListener, Input, OnInit } from '@angular/core';
import { isMobileViewport } from 'src/utils/responsive-utils';
import { AGREEMENT_STATE, ANULLED_STATE, COACTIVE_STATE, IMPUGNATION_STATE, Infringement, PAID_STATE, PENDING_STATE } from '../../../models/infringement';
import { formatCurrency } from 'src/utils/formatting-utils';
import { PopupStateService } from '../../../services/popup-state.service';

@Component({
  selector: 'app-infringements-table',
  templateUrl: './infringements-table.component.html',
  styleUrls: ['./infringements-table.component.less']
})
export class InfringementsTableComponent implements OnInit {

  formatCurrency = formatCurrency;

  @Input() infringements: Infringement[] = [];

  private pending: Infringement[] = [];
  private paid: Infringement[] = [];
  private anulled: Infringement[] = [];
  private agreement: Infringement[] = [];
  private coactive: Infringement[] = [];
  private impugnation: Infringement[] = [];
  private selected: Infringement[] = [];

  constructor(private ventanaDetalleService: PopupStateService) {
    
  }

  showInfringementDetails(infringement: Infringement) {
    this.ventanaDetalleService.showPopup();
    this.ventanaDetalleService.setInfringement(infringement);
  }

  get pendingInfringements(): Infringement[] {
    return this.pending;
  }
  
  get paidInfringements(): Infringement[] {
    return this.paid;
  }

  get anulledInfringements(): Infringement[] {
    return this.anulled;
  }

  get agreementInfringements(): Infringement[] {
    return this.agreement;
  }

  get coactiveInfringements(): Infringement[] {
    return this.coactive;
  }

  get impugnationInfringements(): Infringement[] {
    return this.impugnation;
  }

  get selectedInfringements(): Infringement[] {
    return this.selected;
  }

  set selectedInfringements(infringements: Infringement[]) {
    this.selected = infringements;
  }

  totalSumByCategory(infringements: Infringement[]): number {
    return infringements.reduce((total, infringement) => total + infringement.valuesInformation.total, 0);
  }

  ngOnInit(): void {
    for(let infringement of this.infringements) {
      this.classifyInfringement(infringement);
    }
    this.selected = this.pending;
  }

private classifyInfringement(infringement: Infringement) {
  const { state } = infringement;
  switch (state) {
    case PENDING_STATE:
      this.pending.push(infringement);
      break;
    case PAID_STATE:
      this.paid.push(infringement);
      break;
    case ANULLED_STATE:
      this.anulled.push(infringement);
      break;
    case AGREEMENT_STATE:
      this.agreement.push(infringement);
      break;
    case COACTIVE_STATE:
      this.coactive.push(infringement);
      break;
    case IMPUGNATION_STATE:
      this.impugnation.push(infringement);
      break;
  }
}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileViewport();
  }

  isMobileViewport(): boolean {
    return isMobileViewport();
  }
}
