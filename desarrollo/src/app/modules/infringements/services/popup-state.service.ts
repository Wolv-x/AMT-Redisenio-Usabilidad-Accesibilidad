import { Infringement } from './../models/infringement';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PopupStateService {

  private isVisible = new BehaviorSubject<boolean>(false);
  public isVisible$ = this.isVisible.asObservable();
  private infringement = new BehaviorSubject<Infringement>({} as Infringement);
  public infringement$ = this.infringement.asObservable();

  public showPopup() {
    this.isVisible.next(true);
  }

  public hidePopup() {
    this.isVisible.next(false);
  }

  public setInfringement(infringement: Infringement) {
    this.infringement.next(infringement);
  }
}
