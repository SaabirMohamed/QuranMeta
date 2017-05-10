import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sura } from './sura';
import { Versesound } from '../../components/versesound/versesound';
import { Verseactions } from '../../components/verseactions/verseactions';
import {Suraaudio } from '../../components/suraaudio/suraaudio';
import { Versevideos } from '../../components/versevideos/versevideos';

@NgModule({
  declarations: [
    Sura,
    Versesound,
    Verseactions,
    Suraaudio,
    Versevideos

  ],
  imports: [
    IonicPageModule.forChild(Sura),
  ],
  exports: [
    Sura
  ]
})
export class SuraModule {}
