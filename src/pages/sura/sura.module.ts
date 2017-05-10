import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sura } from './sura';
import { Versesound } from '../../components/versesound/versesound';

@NgModule({
  declarations: [
    Sura,
    Versesound
  ],
  imports: [
    IonicPageModule.forChild(Sura),
  ],
  exports: [
    Sura
  ]
})
export class SuraModule {}
