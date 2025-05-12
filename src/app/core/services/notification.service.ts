import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  showError(msg: string): void {
    alert(msg);
  }
}
