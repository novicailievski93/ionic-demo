import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, ToastController, ToastOptions} from 'ionic-angular';
import {ApiService} from "../../providers/api.service";
import {MenuItemModel} from "../../models/menu-item.model";

@IonicPage()

@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage implements OnInit {

  public food: Array<MenuItemModel>;

  constructor(private apiService: ApiService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
  }

  public ngOnInit(): void {
    this.apiService.getAllFood().subscribe((res) => {
      this.food = res;
    }, (err) => {
      console.log(err);
    });
  }

  public showConfirm(): void {
    const confirm = this.alertCtrl.create({
      title: 'The delivery is fast and free!',
      message: 'First you need to register on our platform, and after that you will be able to order stuff from our restaurant.',
      buttons: [
        {
          text: 'No, thanks',
          handler: () => {
          }
        },
        {
          text: 'Register',
          handler: () => {
            const toastOpts: ToastOptions = {
              message: 'Now we should be redirected to the registration screen, but there is no registration screen :)',
              duration: 5000,
              position: 'bottom'
            };
            let registerToast = this.toastCtrl.create(toastOpts);
            registerToast.present();
          }
        }
      ]
    });
    confirm.present();
  }
}
