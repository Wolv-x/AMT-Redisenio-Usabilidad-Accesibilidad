import { assetsConstants } from "src/app/shared/constants/assets-constants";
import { PathConstants } from "src/app/shared/constants/paths-constants";

export interface Service{
    name: string;
    link: string;
    isAvailable: boolean;
    imageUrl?: string
}

export const services: Service[] = [
    {
        name: 'LANDING_PAGE.SERVICES.AMOUNTS',
        link: PathConstants.AMOUNTS,
        isAvailable: false,
        imageUrl: assetsConstants.LANDING_SERVICES + 'amounts.png'
    },
    {
        name: 'LANDING_PAGE.SERVICES.INFRINGEMENTS_AMT',
        link: PathConstants.INFRINGEMENTS_AMT,
        isAvailable: true,
        imageUrl: assetsConstants.LANDING_SERVICES + 'infringements-amt.png'
    },
    {
        name: 'LANDING_PAGE.SERVICES.INFRINGEMENTS_ANT',
        link: PathConstants.INFRINGEMENTS_ANT,
        isAvailable: false,
        imageUrl: assetsConstants.LANDING_SERVICES + 'infringements-ant.png'
    },
    {
        name: 'LANDING_PAGE.SERVICES.PREFECTURE_VALUES',
        link: PathConstants.PREFECTURE_VALUES,
        isAvailable: false,
        imageUrl: assetsConstants.LANDING_SERVICES + 'prefecture-values.png'
    },
    {
        name: 'LANDING_PAGE.SERVICES.SRI_AMOUNTS',
        link: PathConstants.SRI_AMOUNTS,
        isAvailable: false,
        imageUrl: assetsConstants.LANDING_SERVICES + 'sri-amounts.png'
    },
    {
        name: 'LANDING_PAGE.SERVICES.ONLINE_PAYMENTS',
        link: PathConstants.ONLINE_PAYMENTS,
        isAvailable: false,
        imageUrl: assetsConstants.LANDING_SERVICES + 'online-payments.png'
    }
]