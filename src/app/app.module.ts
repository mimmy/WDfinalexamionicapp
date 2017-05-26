import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
//import { SalesPage } from '../pages/sales/sales';
import { InquiryPage } from '../pages/inquiry/inquiry';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MsoftApi } from '../providers/msoft-api.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    //SalesPage,
    InquiryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    //SalesPage,
    InquiryPage
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MsoftApi
  ]
})
export class AppModule {}
