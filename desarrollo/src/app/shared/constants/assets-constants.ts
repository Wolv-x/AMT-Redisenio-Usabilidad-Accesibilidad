import { environment } from "src/environments/environment.prod";

const BASE_URL = environment.url_images;
const LOGO_URL = BASE_URL + "logo/";
const LANDING_SERVICES = BASE_URL + "landing-services/";
const IDENTIFICATIONS = BASE_URL + "identifications/";

export const assetsConstants = {
    BASE_URL: BASE_URL,
    LOGO_URL: LOGO_URL,
    LANDING_SERVICES: LANDING_SERVICES,
    IDENTIFICATIONS: IDENTIFICATIONS
}