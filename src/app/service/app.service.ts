import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppHttpService {
  private baseUrl = 'https://docassist.care/api/';

  constructor(private httpClient: HttpClient) {}

  public testFetch():Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl + `patient/listing`);
  }
}
