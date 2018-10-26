import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NgxQRCodeModule} from "ngx-qrcode2";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import { RestApiProvider } from '../providers/rest-api/rest-api';
import {AuthPage} from "../pages/auth/auth";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        AuthPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        NgxQRCodeModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        AuthPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BarcodeScanner,
        RestApiProvider,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider
    ]
})
export class AppModule {
}
