import { Component, ViewChild } from '@angular/core';
import { AlertController, ToastController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { RegisterPage } from '../register/register';

import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  dependenciaList: Array<{ value: number, name: string}> = [];
  dependencia: any;

  constructor(private fire: AngularFireAuth, public alertCtrl: AlertController, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {

    this.dependenciaList.push({value: 100001, name: "H. Materno Infantil"});
    this.dependenciaList.push({value: 100002, name: "H. San José"});
    this.dependenciaList.push({value: 100003, name: "H. Metropolitano"});
    this.dependenciaList.push({value: 100004, name: "H. Universitario"});
    this.dependenciaList.push({value: 100005, name: "H. Mugerza"});
    this.dependenciaList.push({value: 100006, name: "Doctors Hospital"});
    this.dependenciaList.push({value: 100007, name: "Swiss Hospital"});

  }

  signInUser(){
    if(!this.email.value.match(/\S/) || !this.password.value.match(/\S/)){
      let toast = this.toastCtrl.create({
      message: 'You forgot to put your Username or Password',
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

  register(){
    this.navCtrl.push(RegisterPage);
  }

  alert(titleText: string, message: string){
    this.alertCtrl.create({
        title: titleText,
        subTitle: message,
        buttons:['OK']
    }).present();
  }
}
