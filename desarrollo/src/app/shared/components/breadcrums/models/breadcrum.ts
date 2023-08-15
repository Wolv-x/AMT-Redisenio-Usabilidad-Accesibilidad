import { PathConstants } from "src/app/shared/constants/paths-constants";

export interface Breadcrumb {
    label: string;
    url: string;
    isActive: boolean;
    isHome?: boolean
}

export const homeBreadcrumb: Breadcrumb = {
    label: 'MAINNAV.HOME',
    url: '',
    isActive: true,
    isHome: true
}

export const infrigementsDataEntryBreadcrumb: Breadcrumb = {
    label: 'INFRINGEMENT.TITLE',
    url: PathConstants.CONSULTATIONS + '/' + PathConstants.INFRINGEMENTS_AMT,
    isActive: true,
    isHome: false
}