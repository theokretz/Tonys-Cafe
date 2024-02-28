import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../dtos/email';
import { Observable } from 'rxjs';
import { environment} from "../../environment/environment";
import {Globals} from "../global/globals";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailBaseUri: string = this.globals.backendUri + '/kontakt/email';
  private awsEndpoint: string = environment.awsEndpoint;

  constructor(private httpClient: HttpClient, private globals: Globals) { }

  sendEmail(email: Email): Observable<Email> {
    return this.httpClient.post<Email>(this.awsEndpoint, email);
  }

  /*
  Version used with Spring Boot backend
  sendEmail(email: Email): Observable<Email> {
    return this.httpClient.post<Email>(
        this.emailBaseUri,
        email
    );
  }
  */
}
