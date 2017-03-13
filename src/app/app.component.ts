import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pick a color to highlight';
  hideColorPicker = true;
  toggleHighlight() {
    this.hideColorPicker = !this.hideColorPicker;
  }
}
