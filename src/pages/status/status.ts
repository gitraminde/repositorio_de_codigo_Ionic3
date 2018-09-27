import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
  providers: [
    AuthServiceProvider

  ]
})
export class StatusPage {
  public userDetails: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.getStatus(this.userDetails.access_token);
  }

  getStatus(token){
    this.authService.statusUser("user", token);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

}
