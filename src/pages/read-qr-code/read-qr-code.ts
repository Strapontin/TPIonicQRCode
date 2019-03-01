import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-read-qr-code',
  templateUrl: 'read-qr-code.html',
})
export class ReadQrCodePage {

  decodedText = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
 
  }

  // Lit un QR code depuis la caméra
  readFromCamera(){

    this.barcodeScanner.scan().then(barcodeData => {

      this.decodedText = "Résultat du scan : " + barcodeData.text;
    });
  }

  // Lit un QR code depuis un fichier
  readFromFile(){

  }
}
