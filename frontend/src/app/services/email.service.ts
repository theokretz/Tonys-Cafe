import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../dtos/email';
import { Observable } from 'rxjs';

import {Globals} from "../global/globals";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailBaseUri: string = this.globals.backendUri + '/kontakt/email';
  constructor(private httpClient: HttpClient, private globals: Globals) { }

  sendEmail(email: Email): Observable<Email> {
    return this.httpClient.post<Email>(
      this.emailBaseUri,
      email
    );
  }
}
