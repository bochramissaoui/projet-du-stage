import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Alert, AlertType} from '../models/Alert';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  // convenience methods
  success(message: string): void {
    this.clear();
    this.alert(new Alert({type: AlertType.Success, message}));
  }

  error(message: string): void {
    this.clear();
    this.alert(new Alert({type: AlertType.Error, message}));
  }

  info(message: string): void {
    this.clear();
    this.alert(new Alert({type: AlertType.Info, message}));
  }

  warn(message: string): void {
    this.clear();
    this.alert(new Alert({type: AlertType.Warning, message}));
  }

  // main alert method
  alert(alert: Alert): void {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId): void {
    this.subject.next(new Alert({id}));
  }
}
