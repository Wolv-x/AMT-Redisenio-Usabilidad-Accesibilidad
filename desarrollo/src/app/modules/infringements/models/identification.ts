import { Infringement } from "./infringement";

export interface Identification {
    number: string;
    name: string;
    type: string;
    pendingValues: number;
    infringements: Infringement[];
}