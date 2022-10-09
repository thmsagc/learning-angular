import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  enableNewMessage = false;
  message: string = "Waiting for click!"

  constructor() {
    setTimeout(() => {
      this.enableNewMessage = true;
    }, 2000)
  }

  onCreateMessage() {
    this.message = "A new message was created."
  }

}
