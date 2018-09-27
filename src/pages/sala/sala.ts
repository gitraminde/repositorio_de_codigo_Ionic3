import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SalaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
  providers: [
    AuthServiceProvider

  ]
})
export class SalaPage {
  
  public userDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.getSala(this.userDetails.access_token);

  }

  getSala(token){
      this.authService.salaUser("sala", token);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaPage');
  }

}
