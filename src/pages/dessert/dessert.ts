import {Component, OnInit} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ApiService} from "../../providers/api.service";
import {MenuItemModel} from "../../models/menu-item.model";

@IonicPage()
@Component({
  selector: 'page-dessert',
  templateUrl: 'dessert.html',
})

export class DessertPage implements OnInit {

  public desserts: Array<MenuItemModel>;

  constructor(private apiService: ApiService) {
  }

  public ngOnInit(): void {
    this.apiService.getAllDesserts().subscribe((res) => {
      this.desserts = res;
    }, (err) => {
      console.log(err);
    })
  }
}
