import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Versevideos } from './versevideos';

@NgModule({
  declarations: [
    Versevideos,
  ],
  imports: [
    IonicPageModule.forChild(Versevideos),
  ],
  exports: [
    Versevideos
  ]
})
export class VersevideosModule {}
