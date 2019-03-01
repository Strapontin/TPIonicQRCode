import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  details: boolean;

  items: Array<{date: string, text: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    
    this.items = [];

    // Pour toutes les données enregistrées
    this.storage.forEach((value, keys, index) => {

      this.items.push({
        date: keys,
        text: value
      });
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!

    console.log(item);
    
    this.navCtrl.push(HomePage, {
      item: item
    });
  }
}
