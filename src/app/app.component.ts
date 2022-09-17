import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  isDarkMode: boolean = false;
  className = 'light';
  modeName = 'Light mode';
  changeMode() {
    if (this.isDarkMode == true) {
      this.isDarkMode = false;
      this.className = 'light';
    } else {
      this.isDarkMode = true;
      this.className = 'dark';
    }
  }
  getClass() {
    return this.className;
  }
}
