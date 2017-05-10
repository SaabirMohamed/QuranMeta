import { Component } from '@angular/core';

/**
 * Generated class for the Suraaudio component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'suraaudio',
  templateUrl: 'suraaudio.html'
})
export class Suraaudio {

  text: string;

  constructor() {
    console.log('Hello Suraaudio Component');
    this.text = 'Hello World';
  }

}
