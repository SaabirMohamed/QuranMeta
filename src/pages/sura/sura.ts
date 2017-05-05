import { FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fireservice } from '../../providers/fireservice';

@IonicPage()
@Component({
  selector: 'page-sura',
  templateUrl: 'sura.html',
})
export class Sura {

  suraTitle: string;
  suraIndex: number;
  suraData: any;
  
  

  constructor(private db: Fireservice,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.suraIndex = this.navParams.data.num;    
    this.suraTitle = this.navParams.data.title;
    this.getSuraData(this.suraIndex);

    // now get the data from the cloud db
  }

   getSuraData(index: number) {
     this.db.getSuraData(index).subscribe((result) => {
       this.suraData = result;
       console.log(result);
       
     });
     
   }

}
