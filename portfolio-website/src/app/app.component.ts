import { Component, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup ,FormControl, Validators } from "@angular/forms";
import { AfterContentInit, HostBinding, OnInit,} from '@angular/core';
import { OverlayContainer } from "@angular/cdk/overlay";
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
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

  constructor(private overlay: OverlayContainer, private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      if (darkMode) {
        localStorage.setItem('theme', this._localStorageDarkTheme);
      } else {
        localStorage.setItem('theme', 'white');
      }
      this.applyDarkSavedTheme();
    });
  }

  ngAfterContentInit(): void {
    this.applyDarkSavedTheme();
  }

  private applyDarkSavedTheme() {
    const theme = localStorage.getItem('theme');
    const darkMode = 'darkMode';
    if (theme == this._localStorageDarkTheme) {
      this.className = darkMode;
      this.overlay.getContainerElement().classList.add(darkMode);

      const dom: HTMLElement = this.elementRef.nativeElement;
      const element_job = dom.querySelectorAll('.job_design');

      for(let i = 0; i < element_job.length;i++){
        let element = element_job[i] as HTMLElement;
        element.style.color = 'white';
      }
      const elements_describtion = dom.querySelectorAll('.describtion_design');
      for(let i = 0; i < elements_describtion.length;i++){
        let element = elements_describtion[i] as HTMLElement;
        element.style.color = 'white';
      }
      const element_titel = dom.querySelectorAll('.titel_stepper');
      for (let i = 0; i < element_titel.length; i++) {
        let element = element_titel[i] as HTMLElement;
        element.style.color = 'white';
      }

    } else {
      this.className = '';
      this.overlay.getContainerElement().classList.remove(darkMode);
      const dom: HTMLElement = this.elementRef.nativeElement;
      const element_job = dom.querySelectorAll('.job_design');
      for (let i = 0; i < element_job.length; i++) {
        let element = element_job[i] as HTMLElement;
        element.style.color = 'black';
      }
      const elements_describtion = dom.querySelectorAll('.describtion_design');
      for(let i = 0; i < elements_describtion.length;i++){
        let element = elements_describtion[i] as HTMLElement;
        element.style.color = 'black';
      }
      const element_titel = dom.querySelectorAll('.titel_stepper');
      for (let i = 0; i < element_titel.length; i++) {
        let element = element_titel[i] as HTMLElement;
        element.style.color = 'black';
      }
    }
  }
}
