import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Versesound } from './versesound';

@NgModule({
  declarations: [
    Versesound,
  ],
  imports: [
    IonicPageModule.forChild(Versesound),
  ],
  exports: [
    Versesound
  ]
})
export class VersesoundModule {}
