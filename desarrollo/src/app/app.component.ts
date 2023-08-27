import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {
  private titleObserver: MutationObserver;

  constructor(
    public translate: TranslateService,
    private titleService: Title,
    private liveAnnouncer: LiveAnnouncer
  ) {
    this.titleObserver = new MutationObserver((mutations) => {
      const newTitle = this.titleService.getTitle();
      this.announceTitleChange(newTitle);
    });

    this.titleObserver.observe(document.querySelector('title')!, {
      subtree: true,
      characterData: true,
      childList: true
    });
  }

  ngOnDestroy(): void {
    this.titleObserver.disconnect();
  }

  announceTitleChange(newTitle: string): void {
    this.translate.stream('ON_PAGE_CHANGE', { title: newTitle }).subscribe(
      (res: string) => this.liveAnnouncer.announce(res)
    )
    //this.liveAnnouncer.announce(newTitle, 'polite');
  }
}
