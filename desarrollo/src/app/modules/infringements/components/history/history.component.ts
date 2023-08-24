import { IdentificationService } from './../../services/identification.service';
import { homeBreadcrumb, infringementsDataEntryBreadcrumb, infringementsHistorialBreadcrumb } from './../../../../shared/components/breadcrums/models/breadcrum';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/components/breadcrums/models/breadcrum';
import { Identification } from '../../models/identification';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit, OnDestroy{
  breadcrumbs: Breadcrumb[] = [];
  identification: Identification = {} as Identification

  constructor(private identificationService :IdentificationService) { }

  ngOnInit(): void {
    let currentBreadcrumb: Breadcrumb = infringementsHistorialBreadcrumb;
    currentBreadcrumb.isActive = false;

    this.breadcrumbs.push(homeBreadcrumb);
    this.breadcrumbs.push(infringementsDataEntryBreadcrumb);
    this.breadcrumbs.push(currentBreadcrumb);
    this.identificationService.getIdentification().subscribe(
      data => this.identification = data
    )
  }

  ngOnDestroy(): void {
    this.identificationService.setIdentification({} as Identification)
  }
}
