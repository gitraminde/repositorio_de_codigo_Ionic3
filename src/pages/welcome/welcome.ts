import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {

    if(localStorage.getItem('userData')){
      this.navCtrl.setRoot(TabsPage);
    }

 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.menu.enable(false);
  }
  ionViewDidLeave(){
    this.menu.enable(false);
  }
 

  signup(){
    this.navCtrl.push(SignupPage);
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  

}
