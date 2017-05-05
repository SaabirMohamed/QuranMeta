import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Suralist } from './suralist';

@Injectable()
export class Fireservice {
  suraTitlePath: any;
  suraTitles = [];
  dbBasePath: string = 'quran/surahs';

  constructor(private af: AngularFireDatabase,public http: Http) {
    
  }

  getSuraTitles() {

    //example
    this.suraTitles = Suralist;
    return this.suraTitles;
    //this.af.list(this.suraTitlePath)
  }

  getSuraData(suraIndex) : FirebaseListObservable<any[]> {
    //for base zero @ Firebase
    suraIndex--;
    //construct the pass based on passed in vars
    let dbPath = `${this.dbBasePath}/${suraIndex}/ayahs/`;
    // return an observable of Data
    // will subscribe from inside component

    return this.af.list(dbPath);



  }

}
