import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'https://openlibrary.org/works/OL24583599W.json';


  constructor(private http: HttpClient) {}

  getBook(isbn: string): Observable<any> {
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
    return this.http.get(url);
  }
}
