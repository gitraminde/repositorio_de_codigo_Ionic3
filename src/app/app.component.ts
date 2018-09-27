import { Component, ViewChild } from '@angular/core';
import { Platform , Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import {StatusPage} from '../pages/status/status';
import {SalaPage} from '../pages/sala/sala';
import {ResultPage} from '../pages/result/result';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('NAV') nav: Nav;

  public pages: Array<{titulo: string , component: any, icon: string}>;
  public rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage = WelcomePage;

      this.pages = [
        {titulo:'Inicio', component: TabsPage, icon: 'home'},
        {titulo:'Estado da Inscrição', component: StatusPage, icon: 'school'},
        {titulo:'Salas de Exame', component: SalaPage, icon: 'school'},
        {titulo:'Resultado', component: ResultPage, icon: 'school'},
       
      ];
      
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){

    this.nav.setRoot(page);
  }

  
}
