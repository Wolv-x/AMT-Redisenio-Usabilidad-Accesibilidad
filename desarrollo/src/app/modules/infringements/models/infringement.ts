export interface Infringement {
    id: number;
    antId: number;
    state: string;
    infringer?: string;
    vehicle?: string;
    image?: string;
    boleta: string;
    points: number;
    article: Article;
    dateInformation: DateInformation;
    location: Location;
    observation: Observation;
    paymentInformation?: PaymentInformation;
    valuesInformation: ValuesInformation;
}

interface Location {
    province: string;
    canton: string;
    street: string;
}

interface Article {
    article: number;
    numeral: number;
    description: string;
}

interface Observation {
    observation: string;
    agent: string;
}

interface DateInformation {
    emisionDate: string;
    registrationDate: string;
    notificationDate: string;
    approvementDate: string;
    expirationDate: string;
}

interface ValuesInformation {
    value: number;
    exemptedValue: number;
    interest: number;
    exemptedInterest: number;
    total: number;
}

interface PaymentInformation {
    date: string;
    place: string;
    paymentVoucher: string;
}

export const PENDING_STATE: string = 'PENDING';
export const PAID_STATE: string = 'PAID';
export const ANULLED_STATE: string = 'ANULLED';
export const AGREEMENT_STATE: string = 'AGREEMENT';
export const COACTIVE_STATE: string = 'COACTIVE';
export const IMPUGNATION_STATE: string = 'IMPUGNATION';