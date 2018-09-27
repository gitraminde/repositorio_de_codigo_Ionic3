import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
  providers: [
    AuthServiceProvider

  ]
})
export class ResultPage {

  public userDetails: any;
  public responseData: any;
  public dataSet: any;
  userPostData = {"token": ""}

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
    navCtrl.swipeBackEnabled = false;
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.getResult(this.userDetails.access_token);

  }

  getResult(token){
    
    this.authService.resultUser("result",token);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
