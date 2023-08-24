export enum IdentityDocumentType {
    IDENTITY_DOCUMENT = 'IDENTITY_DOCUMENT_TYPE',
    REGISTRATION_PLATE = 'PLATE_TYPE',
    RUC = 'RUC_TYPE',
    REFUGEE_CARD = 'REFUGEE_TYPE',
    PASSPORT = 'PASSPORT_TYPE',
}

export const identityDocumentTypes = Object.values(IdentityDocumentType);