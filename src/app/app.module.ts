import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDI9oJM7RXWkhWGo2Oh3qzKMl41wG7y8xw',
  authDomain: 'firestore-bd2da.firebaseapp.com',
  databaseURL: 'https://firestore-bd2da.firebaseio.com',
  projectId: 'firestore-bd2da',
  storageBucket: '',
  messagingSenderId: '331216389824'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
