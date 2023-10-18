import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DadjokesService {
  url = 'https://icanhazdadjoke.com';

  constructor(private http: HttpClient) { }

  getDadJoke(): Observable<any> {
    return this.http.get(this.url, { headers: { Accept: 'application/json' } });
  }

}
