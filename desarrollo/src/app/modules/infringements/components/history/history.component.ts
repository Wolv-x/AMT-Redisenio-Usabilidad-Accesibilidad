import { homeBreadcrumb, infringementsDataEntryBreadcrumb, infringementsHistorialBreadcrumb } from './../../../../shared/components/breadcrums/models/breadcrum';
import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/components/breadcrums/models/breadcrum';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit{
  breadcrumbs: Breadcrumb[] = [];

  ngOnInit(): void {
    let currentBreadcrumb: Breadcrumb = infringementsHistorialBreadcrumb;
    currentBreadcrumb.isActive = false;

    this.breadcrumbs.push(homeBreadcrumb);
    this.breadcrumbs.push(infringementsDataEntryBreadcrumb);
    this.breadcrumbs.push(currentBreadcrumb);
  }
}
