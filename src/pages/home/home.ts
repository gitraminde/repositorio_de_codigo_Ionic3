import { Component } from '@angular/core';
import { NavController, App, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HttpClient, HttpHeaders} from '@angular/common/http';


// import {TabsPage} from '../../pages/tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    AuthServiceProvider

  ] 
})
export class HomePage {
 responseData: any;
 
 public userDetails: any;
  private load;
  constructor(public navCtrl: NavController, public app: App, private menu: MenuController,  public authService: AuthServiceProvider) {
     const data = JSON.parse(localStorage.getItem('userData'));
     this.userDetails = data.userData;

     
  }
  ionViewDidLoad() {
    this.menu.enable(true);
  }
  ionViewDidLeave(){
    this.menu.enable(false);
  }


   
  backToWelcome(){
    // const root = this.app.getRootNavById('n4');
    // root.getSecondaryIdentifier()
    this.app.getRootNav().setRoot(LoginPage);
  }


  getLogout(){
    this.authService.logOut("logout",this.userDetails.access_token);
      setTimeout(()=>this.backToWelcome(), 1000);
    localStorage.clear(); 
  }

}
