import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

  getMeaning(suraID: number = 1, languageID: string = 'en' ,edition: string = 'asad') {
    return this.http.get(`http://api.alquran.cloud/surah/1/en.asad`);
    // had to hunt for the data ... its here result.json().data.ayahs
  }

}
