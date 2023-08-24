import { Injectable } from "@angular/core";
import { Identification } from "../models/identification";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class IdentificationService {
  private readonly dataUrl = environment.data_url + "identifications.json";
  private identification = new BehaviorSubject<Identification>(
    {} as Identification
  )
  identification$: Observable<Identification> = this.identification.asObservable()

  constructor(private http: HttpClient) { }

  getInfringementHistoryByIdentificationNumber(
    identificationNumber: string
  ): Observable<Identification> {
    return this.http
      .get<Identification[]>(this.dataUrl)
      .pipe(
        map(
          (identifications: Identification[]) => {
            const foundIdentification = identifications.find(
              (identification: Identification) =>
                identification.number === identificationNumber
            ) || ({} as Identification);

            this.setIdentification(foundIdentification); // Actualiza el BehaviorSubject
            return foundIdentification;
          }
        )
      );
  }

  public setIdentification(identification: Identification) {
    this.identification.next(identification);
  }

  public getIdentification(): Observable<Identification> {
    return this.identification$
  }

  public isEmptyIdentification(): boolean {
    return Object.keys(this.identification.value).length === 0
  }
}
