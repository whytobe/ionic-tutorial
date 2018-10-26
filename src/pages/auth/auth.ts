import {Component} from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {login, setCredential, getCredential} from './../../utils/Api';
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-auth',
    templateUrl: 'auth.html',
})
export class AuthPage {

    username = 'peter@klaven';
    password = 'cityslicka';

    loader: Loading;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public loading: LoadingController) {
    }

    ionViewWillLoad() {
        this.checkLogin()
    }

    showLoad() {
        this.loader = this.loading.create();
        this.loader.present();
    }

    hideLoad() {
        if (this.loader) {
            this.loader.dismissAll();
        }
    }

    checkLogin() {
        this.showLoad();
        login().then(auth => {
            if (auth) {
                this.navCtrl.setRoot(TabsPage);
            }
        }).then(() => {
            this.hideLoad();
        })
    }

    onLoginClick() {
        setCredential(this.username, this.password);
        this.checkLogin();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AuthPage');
    }

}
