import { Component } from '@angular/core';

/**
 * Generated class for the Versesound component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'versesound',
  templateUrl: 'versesound.html'
})
export class Versesound {

  isPlaying: boolean = false;

  constructor() {
    
    
  }

  toggleAnim() {
      this.isPlaying = !this.isPlaying;
  }

}
