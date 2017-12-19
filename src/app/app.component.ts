import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <bs-welcome></bs-welcome>`,
})
export class AppComponent  { name = 'Angular 2'; }
