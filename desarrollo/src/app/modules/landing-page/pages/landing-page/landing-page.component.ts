import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit{

  constructor(@Inject(DOCUMENT) private document: Document, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.stream('LANDING_PAGE.TITLE').subscribe(
      (res: string) => this.document.title = res
    );
    this.translate.stream('HEADER.AMT').subscribe(
      (res: string) => this.document.title += ' - ' + res
    )
  }
}
