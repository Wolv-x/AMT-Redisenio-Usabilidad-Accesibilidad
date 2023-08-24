import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.less']
})
export class FormPageComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.stream('INFRINGEMENT.FORM.TITLE').subscribe(
      (res: string) => this.document.title = res
    );
    this.translate.stream('HEADER.AMT').subscribe(
      (res: string) => this.document.title += ' - ' + res
    )
  }
}
