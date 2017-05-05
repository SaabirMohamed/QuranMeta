//import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Fireservice } from '../../providers/fireservice';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  suraNames = [];
  constructor(private db: Fireservice, public navCtrl: NavController) {
        this.getSuraNames();
  }

  getSuraNames(){
    this.suraNames = this.db.getSuraTitles();
  }

  gotoSura(num: number, title: string) {
    let data = {
        num: num,
        title: title
    }
    // Load the Sura Module passing in the name
    this.navCtrl.push('Sura',data);
  }

}
