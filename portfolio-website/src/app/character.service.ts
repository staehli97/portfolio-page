import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) { }

  getRandomCharacter() {
    const characterId = Math.floor(Math.random() * 826) + 1; // Zufällige ID zwischen 1 und 50
    return this.http.get(`${this.apiUrl}/${characterId}`);
  }
}
