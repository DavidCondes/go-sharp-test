import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConstants } from '../app.constants';
import { FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { romanNumberValidator, validRomanValidator } from '../shared/app.validations';
import { ListResultsComponent } from '../results-list/results-list.component';
import { Output, EventEmitter } from '@angular/core';
import { RomanDecimal } from '../models/roman.model';
import { ThisReceiver } from '@angular/compiler';
import { keyframes } from '@angular/animations';
import { ObjectUnsubscribedError } from 'rxjs';



@Component({
  selector: 'app-input-roman',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ListResultsComponent],
  templateUrl: './input-roman.component.html',
  styleUrl: './input-roman.component.scss'
})
export class InputRomanComponent {

  romanForm!: FormGroup;
  romanMap = AppConstants.romanMap;
  romanArray: Array<RomanDecimal> = new Array();

  constructor(){}

  ngOnInit(): void{

    this.romanForm = new FormGroup({
      number: new FormControl('', [Validators.required, romanNumberValidator(), validRomanValidator()])
    });

  }

  get f(){return this.romanForm.controls;}

  submit(): void{
    let romanStr = this.romanForm.value.number.toUpperCase();
    let romanToDecimal = this.romanToDecimal(romanStr);
    let newRoman = new RomanDecimal(romanStr, romanToDecimal);
    this.romanArray.push(newRoman);

    this.resetInput();
  }

  resetInput(): void {
    this.romanForm.reset();
    this.romanForm.clearValidators();
    this.romanForm.updateValueAndValidity();
  }
  
  romanToDecimal(roman:string): number{
    let result = 0;
    let pNumber =  0;
    let number =  0;
    
    let romanArray = roman.split("");
    romanArray = romanArray.reverse();

    for(const c of romanArray){
        number = this.romanMap.get(c)!;
        number < pNumber ? result -= number : result += number;
        pNumber = number;
    }

    return result;
  }
  

}
