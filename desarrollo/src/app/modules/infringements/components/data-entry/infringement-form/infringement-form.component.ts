import { IdentificationService } from './../../../services/identification.service';
import { Component } from '@angular/core';
import { IdentityDocumentType, identityDocumentTypes } from '../../../models/identity-document';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IdentificationValidators } from 'src/utils/forms-utils';
import { Router } from '@angular/router';
import { Identification } from '../../../models/identification';
import { PathConstants } from 'src/app/shared/constants/paths-constants';

@Component({
  selector: 'app-infringement-form',
  templateUrl: './infringement-form.component.html',
  styleUrls: ['./infringement-form.component.less']
})
export class InfringementFormComponent {
  documentTypes = identityDocumentTypes;
  selectValue: string = identityDocumentTypes[0];
  identificationHasFound: boolean = true;


  identificationForm = new FormGroup({
    'selectedDocumentType': new FormControl(
      identityDocumentTypes[0],
      [
        Validators.required
      ]
    ),
    'documentNumber': new FormControl(
      '',
      [
        Validators.required,
        IdentificationValidators.cedula
      ]
    )
  });

  constructor(
    private identificationService: IdentificationService,
    private router: Router
  ) {
    this.documentType.valueChanges.subscribe(() => {
      this.updateDocumentNumberValidator();
    });
  }

  private getSelectedValidator(): (control: FormControl) => null | { [key: string]: any } {
    const selectedType = this.documentType.value;

    switch (selectedType) {
      case IdentityDocumentType.IDENTITY_DOCUMENT:
        return IdentificationValidators.cedula;
      case IdentityDocumentType.REGISTRATION_PLATE:
        return IdentificationValidators.licensePlate;
      case IdentityDocumentType.RUC:
        return IdentificationValidators.ruc;
      case IdentityDocumentType.REFUGEE_CARD:
        return IdentificationValidators.refugeeCard;
      case IdentityDocumentType.PASSPORT:
        return IdentificationValidators.passport;
      default:
        return () => null;
    }
  }

  private updateDocumentNumberValidator() {
    const documentNumberControl = this.documentNumber;
    const selectedValidator = this.getSelectedValidator();

    documentNumberControl.clearValidators();
    documentNumberControl.setValidators([
      Validators.required,
      selectedValidator
    ]);

    documentNumberControl.updateValueAndValidity();
  }

  get documentType(): FormControl {
    return this.identificationForm.controls['selectedDocumentType'];
  }

  get documentNumber(): FormControl {
    return this.identificationForm.controls['documentNumber'];
  }

  onDocumentNumberInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value.replace(/-/g, '').toUpperCase();
    this.documentNumber.setValue(inputValue, { emitEvent: false });
  }

  onDocumentNumberChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value.replace(/-/g, '').toUpperCase();
    this.documentNumber.setValue(inputValue);
  }

  onSubmit() {
    this.identificationService.getInfringementHistoryByIdentificationNumber(this.documentNumber.value).subscribe((data: Identification) => {
      if(this.identificationService.isEmptyIdentification()){
        this.identificationHasFound = false;
        return;
      }
      
      this.router.navigate([this.router.url, PathConstants.INFRINGEMENTS_HISTORY]);
    })
  }
}


