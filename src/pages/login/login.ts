import { Component, ViewChild } from '@angular/core';
import { AlertController, ToastController, IonicPage, NavController, NavParams} from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public alertCtrl: AlertController, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {

  }

  signInUser(){
    if(!this.email.value.match(/\S/) || !this.password.value.match(/\S/)){
      let toast = this.toastCtrl.create({
      message: 'Please fill correctly your email and password',
      duration: 3000
      });
      toast.present();
    }else{
      this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
      console.log('got some data', data);
      this.alert('Logged In', 'Success! You are logged in');
      this.navCtrl.setRoot (HomePage);
      //user is logged in
      })
      .catch(error =>{
      console.log('got an error', error);
      this.alert('Error!', error.message);
      });
      console.log('Would sign in with:', this.email.value, ' & ', this.password.value);
    }
  }

  alert(titleText: string, message: string){
    this.alertCtrl.create({
        title: titleText,
        subTitle: message,
        buttons:['OK']
    }).present();
  }
}
