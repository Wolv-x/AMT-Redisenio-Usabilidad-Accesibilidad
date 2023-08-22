import { Component, Input } from '@angular/core';
import { formatCurrency } from 'src/utils/formatting-utils';

@Component({
  selector: 'app-amount-values',
  templateUrl: './amount-values.component.html',
  styleUrls: ['./amount-values.component.less']
})
export class AmountValuesComponent {
  @Input() pendingValues: number = 0.00;

  numberToCurrency(value: number): string {
    return formatCurrency(value);
  }
}
