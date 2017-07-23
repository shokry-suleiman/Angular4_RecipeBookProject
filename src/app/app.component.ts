import { Component , OnInit } from '@angular/core';

import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyD7oDp-6MD5aVI28M9P-tBA0Nqj4i0YZSI",
      authDomain: "ng-recipe-book-68280.firebaseapp.com"
    });

  }
}
