import { Component, Input } from '@angular/core';
import { Service } from '../../models/services';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.less']
})
export class ServiceCardComponent {
  @Input() service: Service = {} as Service;
}
