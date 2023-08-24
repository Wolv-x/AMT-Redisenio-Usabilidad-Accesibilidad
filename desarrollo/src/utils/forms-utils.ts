import { AbstractControl, ValidationErrors } from '@angular/forms';



export class IdentificationValidators {
    static cedula(control: AbstractControl): ValidationErrors | null {
        const cedula: string = control.value;

        if (cedula.length !== 10) {
            return { invalidCedula: true };
        }

        const thirdDigit = parseInt(cedula.charAt(2), 10);
        if (thirdDigit >= 6) {
            return { invalidCedula: true };
        }

        const coefValidationCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        const verifier = parseInt(cedula.charAt(9), 10);
        let sum = 0;

        for (let i = 0; i < cedula.length - 1; i++) {
            const digit = parseInt(cedula.charAt(i), 10) * coefValidationCedula[i];
            sum += (digit % 10) + Math.floor(digit / 10);
        }

        if ((sum % 10 !== 0 && sum % 10 !== verifier) && (10 - (sum % 10) !== verifier)) {
            return { invalidCedula: true };
        }

        return null;
    }

    static licensePlate(control: AbstractControl): ValidationErrors | null {
        const licensePlate: string = control.value;

        const regexes = [
            /^[A-Z]{2}\d{3}[A-Z]{1}$/,
            /^[A-Z]{3}\d{3}$/,
            /^[A-Z]{3}\d{4}$/
        ];

        if (!regexes.some(regex => regex.test(licensePlate))) {
            return { invalidLicensePlate: true };
        }

        return null;
    }

    static ruc(control: AbstractControl): ValidationErrors | null {
        const ruc: string = control.value;

        if (IdentificationValidators.esRucValido(ruc)) {
            return null; // El RUC es válido
        } else {
            return { invalidRuc: true }; // El RUC es inválido
        }
    }

    private static esRucValido(numeroRuc: string): boolean {
        return (
            IdentificationValidators.esNumeroIdentificacionValida(numeroRuc) &&
            IdentificationValidators.esCodigoProvinciaValido(numeroRuc)
        );
    }

    private static esNumeroIdentificacionValida(numeroIdentificacion: string): boolean {
        return numeroIdentificacion.length === 13 && /^\d+$/.test(numeroIdentificacion);
    }

    private static esCodigoProvinciaValido(numeroRuc: string): boolean {
        const numeroProvincia: number = parseInt(numeroRuc.substring(0, 2), 10);
        return numeroProvincia > 0 && numeroProvincia <= 30;
    }

    static refugeeCard(control: AbstractControl): ValidationErrors | null {
        const refugeeCard: string = control.value;

        const refugeeCardRegex = /^[A-Z]{1}[0-9]{7}$/;
        if (!refugeeCardRegex.test(refugeeCard)) {
            return { invalidRefugeeCard: true };
        }

        return null;
    }

    static passport(control: AbstractControl): ValidationErrors | null {
        const passportNumber: string = control.value;

        const passportRegex = /^[A-Z]{1}[0-9]{7}$/;
        if (!passportRegex.test(passportNumber)) {
            return { invalidPassport: true };
        }

        if (!(/[A-Z]/.test(passportNumber.charAt(0)))) {
            return { invalidPassport: true };
        }

        const digits = passportNumber.substring(1);
        if (!(/^\d+$/.test(digits))) {
            return { invalidPassport: true };
        }

        return null;
    }
}