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

  onChangeMessage(event: Event) {
    this.message = (<HTMLInputElement>event.target).value;
  }

  onCreateMessage() {
    this.message = "A new message was created."
  }

}
