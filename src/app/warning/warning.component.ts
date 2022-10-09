import {Component} from "@angular/core";

@Component({
  selector: 'app-warning',
  templateUrl: 'warning.component.html',
  styleUrls: ['warning.component.css']
})
export class WarningComponent {
  message: string = 'This alert message was passed by string interpolation.';
}
