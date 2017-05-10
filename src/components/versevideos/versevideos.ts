import { Component } from '@angular/core';

/**
 * Generated class for the Versevideos component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'versevideos',
  templateUrl: 'versevideos.html'
})
export class Versevideos {

  text: string;

  constructor() {
    console.log('Hello Versevideos Component');
    this.text = 'Hello World';
  }

}
