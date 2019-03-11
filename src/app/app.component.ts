import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadFeature = feature;
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB2Pmg3568NuyGysYvNz2JokGTTV1sHlR0",
      authDomain: "ng-recipe-book-beb48.firebaseapp.com",
    });
  }
}
