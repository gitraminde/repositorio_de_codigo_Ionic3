import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
//import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    AuthServiceProvider

  ]
})
export class LoginPage {
  
responseData: any;
userData = {"username":"","password":"" }
  constructor(public navCtrl: NavController,  public authService: AuthServiceProvider, public menu: MenuController) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.enable(false);
  }
  ionViewDidLeave(){
    this.menu.enable(true);
  }


  login() { 
    
    this.authService.postData(this.userData, "login")
    .then(result => {
      this.responseData = result
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
      },
      (err) => {
        console.log(err);
      }
    );  
  }
}
