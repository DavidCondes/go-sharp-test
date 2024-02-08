import { Component } from '@angular/core';
import { RomanDecimal } from '../models/roman.model';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.scss'
})
export class ResultCardComponent {
  @Input() roman;

}
