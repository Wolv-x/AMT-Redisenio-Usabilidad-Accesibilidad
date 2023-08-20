import { Component } from '@angular/core';
import { identityDocumentTypes } from '../../../models/identity-document';

@Component({
  selector: 'app-infringement-form',
  templateUrl: './infringement-form.component.html',
  styleUrls: ['./infringement-form.component.less']
})
export class InfringementFormComponent {
  documentTypes = identityDocumentTypes;
}
