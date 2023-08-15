import { Component, Input } from '@angular/core';
import { Breadcrumb } from './models/breadcrum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.less']
})
export class BreadcrumsComponent {
  @Input() breadcrumbs: Breadcrumb[] = [];
  
  constructor(public translate: TranslateService) {
  }
}
