import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {logout} from './../../utils/Api';
import {AuthPage} from "../auth/auth";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {

    constructor(public navCtrl: NavController) {

    }

    onLogoutClick() {
        logout();
        this.navCtrl.setRoot(AuthPage)
    }
}
