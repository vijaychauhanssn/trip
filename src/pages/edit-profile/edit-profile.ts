import { Component } from '@angular/core';
import {  NavController, ToastController, LoadingController } from 'ionic-angular';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }
  editToast() {
  let toast = this.toastCtrl.create({
    message: 'User was edited successfully',
    duration: 3000,
    spinner: 'hide',
    position: 'bottom',
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
  toast.present();

  let loading = this.loadingCtrl.create({
      content: 'Please Wait..'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.setRoot(HomePage);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 4000);

  }

    
 

}
