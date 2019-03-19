import { Injectable } from '@angular/core';
import {Component} from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(public toastController : ToastController) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'User Not Found',
      duration: 2000
    });
    toast.present();
  }
}
