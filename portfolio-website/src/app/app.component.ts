import { Component, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup ,FormControl, Validators } from "@angular/forms";
import { AfterContentInit, HostBinding, OnInit,} from '@angular/core';
import { OverlayContainer } from "@angular/cdk/overlay";
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { DadjokesService } from './dadjokes.service';
import {MatButtonModule} from "@angular/material/button";
import { CharacterService } from "./character.service";
import { CryptoService} from "./crypto.service";
import { BookService } from "./book.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  private readonly _localStorageDarkTheme = 'dark';
  @HostBinding('class') className = '';
  title = 'Lars Stähli';
  toggleControl = new FormControl((localStorage.getItem('theme') == this._localStorageDarkTheme));
  characterData: any;
  cryptoData: any;
  joke: string = "";
  bookData: any;
  isbn = "9781544507859";
  dadJokeTitle = 'Dad jokes';

  constructor(private overlay: OverlayContainer,
              private elementRef: ElementRef,
              private dadjokes: DadjokesService,
              private characterService: CharacterService,
              private cryptoService: CryptoService,
              private bookService: BookService) {

  }
  fetchJoke(): void {
    this.dadjokes.getDadJoke().subscribe((data: any) => {
      this.joke = data.joke;
    });
  }

  fetchCharacter() {
    this.characterService.getRandomCharacter().subscribe(data => {
      this.characterData = data;
    });
  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      if (darkMode) {
        localStorage.setItem('theme', this._localStorageDarkTheme);
      } else {
        localStorage.setItem('theme', 'white');
      }
      this.applyTheme();
    });

    this.cryptoService.getCrypto().subscribe(data=>{
        this.cryptoData = data.data;
    })

    this.bookService.getBook(this.isbn).subscribe(data=>{
      if (data && data["ISBN:" + this.isbn]) {
        this.bookData = data["ISBN:" + this.isbn];
        console.log(this.bookData); // Zum Testen
      }
    })
  }

  ngAfterContentInit(): void {
    this.applyTheme();
  }

  private applyTheme() {
    const theme = localStorage.getItem('theme');
    const darkMode = 'darkMode';
    const whiteMode = 'whiteMode';

    if (theme == this._localStorageDarkTheme) {
      this.className = darkMode;
      this.overlay.getContainerElement().classList.add(darkMode);
    } else {
      this.className = whiteMode;
      this.overlay.getContainerElement().classList.add(whiteMode);
    }
  }
}
