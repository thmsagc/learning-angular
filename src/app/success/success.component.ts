import { Component } from "@angular/core";

@Component({
  selector: 'app-success',
  templateUrl: 'success.component.html',
  styleUrls: ['success.component.css']
})
export class SuccessComponent {
  message: string = "This message was passed by Property Binding."
}
