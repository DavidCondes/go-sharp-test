import { Component, Input } from '@angular/core';
import { RomanDecimal } from '../models/roman.model';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from '../result-card/result-card.component';

@Component({
  selector: 'app-list-results',
  standalone: true,
  imports: [CommonModule, ResultCardComponent],
  templateUrl: './results-list.component.html',
  styleUrl: './results-list.component.scss'
})
export class ListResultsComponent {
  @Input() romanArray;
}
