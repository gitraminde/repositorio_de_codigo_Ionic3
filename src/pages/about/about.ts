import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }
  ionViewDidLoad() {
    this.menu.enable(false);
  }
  ionViewDidLeave(){
    this.menu.enable(true);
  }

}
