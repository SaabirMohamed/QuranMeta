import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Verseactions } from './verseactions';
import { Versesound } from '../versesound/versesound';
@NgModule({
  declarations: [
    Verseactions,
    Versesound
  ],
  imports: [
    IonicPageModule.forChild(Verseactions),
  ],
  exports: [
    Verseactions
  ]
})
export class VerseactionsModule {}
