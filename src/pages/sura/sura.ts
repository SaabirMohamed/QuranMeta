// import { startAutoplay } from 'ionic-angular/umd/components/slides/swiper/swiper';
// import { Directive } from '@angular/core/core';
import { Response } from '@angular/http/http';
// import { FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fireservice } from '../../providers/fireservice';
import { Data } from '../../providers/data';


@IonicPage()
@Component({
  selector: 'page-sura',
  templateUrl: 'sura.html',
})
export class Sura {

  previousElements = null;
  suraTitle: string;
  suraIndex: number;
  suraData: any;
  suraImgAyaIndex: number;
  selectedLanguage: string = 'en';
  selectedEdition: string = 'asad';
  translationData = [1,2,3];
  controllActive: boolean = false;
  

  constructor(private httpData: Data,
              private db: Fireservice,
              public navCtrl: NavController,
              public navParams: NavParams) {
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
       this.getMeaning();
      //  this.getVerseIndex()
     });
     
   }

  //  getVerseIndex(){
  //    for (let i = 0; i < this.suraData.length; i++) {
  //      console.log(this.suraData[i]);
  //    }   
  //  }

  getMeaning() {
      this.httpData.getMeaning(this.suraIndex,this.selectedLanguage,this.selectedLanguage)
      .subscribe((result : Response) => {
                          // console.log(result.json().data.ayahs);
                          this.translationData = result.json().data.ayahs;
                     });
  }

  showControlls(id: number = 1) {
    // reset any elements that mights be open already
    if (this.previousElements !== null) {
        const ayaActions = document.getElementsByClassName('ayaActions')[this.previousElements];
        ayaActions.setAttribute('style','display: none');
    }
    // the target element
    
    if (this.previousElements == (id - 1) ) {
      
      const ayaActions = document.getElementsByClassName('ayaActions')[this.previousElements];
      ayaActions.setAttribute('style','display: none');
      this.previousElements = null;
      
    } else {
          
          const ayaActions = document.getElementsByClassName('ayaActions')[id -1];
          ayaActions.setAttribute('style','display: inline');
          this.previousElements = id - 1; 
    }
    
    
    

    

    
  }

}
