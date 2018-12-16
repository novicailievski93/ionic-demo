import {Component, Input} from '@angular/core';
import {MenuItemModel} from "../../models/menu-item.model";
import {AlertController, ToastController, ToastOptions} from "ionic-angular";

@Component({
  selector: 'menu-items',
  templateUrl: 'menu-items.html'
})

export class MenuItemsComponent {

  @Input()
  public menuItems: Array<MenuItemModel>;

  constructor(private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
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
