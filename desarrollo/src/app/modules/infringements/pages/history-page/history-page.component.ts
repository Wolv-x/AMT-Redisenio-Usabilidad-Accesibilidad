import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.less']
})
export class HistoryPageComponent implements OnInit{

  constructor(@Inject(DOCUMENT) private document: Document, private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.stream('HISTORY.TITLE').subscribe(
      (res: string) => this.document.title = res
    );
    this.translate.stream('HEADER.AMT').subscribe(
      (res: string) => this.document.title += ' - ' + res
    )
  }
}
