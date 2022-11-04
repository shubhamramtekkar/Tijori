import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private subject = new BehaviorSubject<any>('');

  sendClickEvent(ev:any) {
    this.subject.next(ev);
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
