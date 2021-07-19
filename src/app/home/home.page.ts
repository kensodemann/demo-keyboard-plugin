import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  status = 'unknown';

  constructor(private keyboard: Keyboard) {
    this.keyboard
      .onKeyboardDidHide()
      .pipe(tap(() => (this.status = 'hidden')))
      .subscribe();
    this.keyboard
      .onKeyboardDidShow()
      .pipe(tap(() => (this.status = 'visible')))
      .subscribe();
  }

  show() {
    setTimeout(() => {
      this.keyboard.show();
    });
  }

  hide() {
    this.keyboard.hide();
  }
}
