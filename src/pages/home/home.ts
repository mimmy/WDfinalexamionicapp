import {Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MsoftApi } from '../../providers/msoft-api.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  somethings: any[];

  constructor(public navCtrl: NavController, public msoftService: MsoftApi) {

  }

  ionViewDidLoad() {
    this.msoftService.getExpiring().then((data:any[]) => {
      this.somethings=data;
    });
}

  testtest(){
    alert(this.msoftService.getExpiring());
  }

}
