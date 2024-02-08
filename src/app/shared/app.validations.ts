import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { AppConstants } from "../app.constants";




export function romanNumberValidator(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {

        if (control.value == null) return null;

        const roman = !AppConstants.romanSymbolRegex.test(control.value.toUpperCase());
        return roman ? { romanNumber: { value: control.value } } : null;
    
    }
}


export function validRomanValidator(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {

        if (control.value == null) return null;

        const roman = !AppConstants.romanValidRegex.test(control.value.toUpperCase());
        return roman ? { romanValidNumber: { value: control.value } }: null;
    
    }
}
