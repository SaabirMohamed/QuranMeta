import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Suraaudio } from './suraaudio';

@NgModule({
  declarations: [
    Suraaudio,
  ],
  imports: [
    IonicPageModule.forChild(Suraaudio),
  ],
  exports: [
    Suraaudio
  ]
})
export class SuraaudioModule {}
