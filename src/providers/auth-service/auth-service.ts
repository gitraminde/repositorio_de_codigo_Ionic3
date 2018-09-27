import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';


let apiUrl = "http://localhost:8000/api/auth/";

@Injectable()
export class AuthServiceProvider {
  public userDetails: any;
  private load;
  private logout;
  private userData:any;
  private userSala:any;
  private userResult:any;
 
  constructor(public http: HttpClient, public navCtrl: NavController,public loadingCtrl: LoadingController) {
    this.load = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 3000
    });
    
  }


  postData(credencials, type) {
      
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      this.load.present();
      this.http.post(apiUrl + type, credencials, {headers: headers})
      
        .subscribe(res => {
          resolve(res);
          this.load.dismiss();
        },
        (err) => {
            reject(err);
            this.load.dismiss();
        });

    });

  }

  

  salaUser(type,token) {

    this.load.present();
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+token+''
    });
    
    this.http.get(apiUrl + type, { headers: headers })
    .map(res =>res)
    .subscribe(
      response => {
        this.userSala = response;
      this.load.dismiss();  
      }
    );
  }

  resultUser(type,token) {
     const data = JSON.parse(localStorage.getItem('userData'));
     this.userDetails = data.userData;
    this.load.present();
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+token+''
    });
    
    this.http.get(apiUrl + type, { headers: headers })
    .map(res =>res)
    .subscribe(
      response => {
        this.userResult = response;
      this.load.dismiss();  
      }
    );

  }

  statusUser(type, token) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.load.present();
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+token+''
    });
    
    this.http.get(apiUrl + type, { headers: headers })
    .map(res =>res)
    .subscribe(
      response => {
        this.userData = response;
        console.log(this.userData);
      this.load.dismiss();  
      }
    );

  }
  logOut(type, token) {

    this.load.present();
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+token+''
    });
    
    this.http.get(apiUrl + type, { headers: headers })
    .map(res =>res)
    .subscribe(
      response => {
        this.logout = response;
      this.load.dismiss();  
      }
    );

  }
}
