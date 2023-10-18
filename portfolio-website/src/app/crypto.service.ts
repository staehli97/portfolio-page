import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiURL = "https://api.coincap.io/v2/assets"


  constructor(private http: HttpClient) { }

  getCrypto(): Observable<any> {
    return this.http.get(this.apiURL,{ headers: { Accept: 'application/json' } } )
  }
}
