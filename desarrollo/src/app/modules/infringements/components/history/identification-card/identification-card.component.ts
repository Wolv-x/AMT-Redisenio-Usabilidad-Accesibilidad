import { Component, Input } from '@angular/core';
import { Identification } from '../../../models/identification';
import { assetsConstants } from 'src/app/shared/constants/assets-constants';
import { IdentityDocumentType } from '../../../models/identity-document';

@Component({
  selector: 'app-identification-card',
  templateUrl: './identification-card.component.html',
  styleUrls: ['./identification-card.component.less']
})
export class IdentificationCardComponent {
  @Input() identification: Identification = {} as Identification;

  private readonly VEHICLE_IMAGE = 'vehicle.png';
  private readonly PERSON_IMAGE = 'person.png';

  get imageUrl(): string {
    const imageType = this.isVehicle() ? this.VEHICLE_IMAGE : this.PERSON_IMAGE;
    return assetsConstants.IDENTIFICATIONS + imageType;
  }

  isVehicle(): boolean {
    return this.identification.type === IdentityDocumentType.REGISTRATION_PLATE
  }
}

