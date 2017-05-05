import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sura } from './sura';

@NgModule({
  declarations: [
    Sura,
  ],
  imports: [
    IonicPageModule.forChild(Sura),
  ],
  exports: [
    Sura
  ]
})
export class SuraModule {}
