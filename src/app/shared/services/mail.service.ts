import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  send(email: string) {
    const url = `https://us-central1-gft-voting.cloudfunctions.net/sendEmail?email=${email}`;

    return this.http.post(url, null);
  }
}
