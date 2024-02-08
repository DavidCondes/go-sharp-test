import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputRomanComponent } from './input-roman/input-roman.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputRomanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'technical-go-sharp';
}
