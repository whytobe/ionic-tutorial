import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    qrcode = 'http://www.google.co.th';
    data = '';

    constructor(
        public navCtrl: NavController,
        private barcodeScanner: BarcodeScanner
    ) {

    }

    scanRequest() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.data = barcodeData.text;
        }).catch(err => {
            this.data = err
        });
    }

}
