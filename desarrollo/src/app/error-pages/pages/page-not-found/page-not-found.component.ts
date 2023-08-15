import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.less']
})
export class PageNotFoundComponent implements OnInit{
  constructor(@Inject(DOCUMENT) private document: Document, private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.stream('NOTFOUND.DOCTITLE').subscribe(
      (res: string) => this.document.title = res
    );
    this.translate.stream('HEADER.AMT').subscribe(
      (res: string) => this.document.title += ' - ' + res
    )
  }
}
