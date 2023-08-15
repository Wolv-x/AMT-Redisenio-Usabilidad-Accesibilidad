import { Component, OnInit } from '@angular/core';
import { Breadcrumb, homeBreadcrumb, infrigementsDataEntryBreadcrumb } from 'src/app/shared/components/breadcrums/models/breadcrum';


@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.less']
})
export class DataEntryComponent implements OnInit{
  breadcrumbs: Breadcrumb[] = [ ];

  ngOnInit(): void {
    let currentBreadcrumb: Breadcrumb = infrigementsDataEntryBreadcrumb;
    currentBreadcrumb.isActive = false;

    this.breadcrumbs.push(homeBreadcrumb);
    this.breadcrumbs.push(currentBreadcrumb);
  }
}
