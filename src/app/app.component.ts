import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  

  ngOnInit (){
    firebase.initializeApp({
      apiKey: "AIzaSyCVVrh8KEQrw66ceUuLYzbf9be8yMr_kcY",
    authDomain: "recipe-books-1.firebaseapp.com"
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}