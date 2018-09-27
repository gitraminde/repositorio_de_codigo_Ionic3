import { Component } from '@angular/core';
import { NavController, MenuController  } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public menu: MenuController ) {

    

  }
  ionViewDidLoad() {
    this.menu.enable(false);
  }
  ionViewDidLeave(){
    this.menu.enable(true);
  }
 

}
