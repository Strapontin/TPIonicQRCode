import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component, ViewChild, ɵConsole } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: any = null;
  generatedWhen: string = null;
  qrText = null;
  QRCode = null;

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing, private storage: Storage, public navParams: NavParams) {

    this.selectedItem = navParams.get('item');

    if (this.selectedItem){

      this.qrText = this.selectedItem.text;
      this.generatedWhen = "Généré le " + this.selectedItem.date;

      this.createQRCode();
    }
  }

  // Lorsque l'on veut créer le code
  createQRCode() {

    this.QRCode = this.qrText;

    this.storage.set(new Date().toISOString(), this.qrText);
  }


  // Lorsque l'on veut partager le code
  shareQRCode() {

    let elementClass = document.getElementsByClassName('qr');
    let imageSource = elementClass[0].children[0].getAttribute('src');

    console.log(imageSource);

    this.socialSharing.share(null, "image", imageSource.toString(), null);
  }
}
