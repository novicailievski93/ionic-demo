import {Component, OnInit} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ApiService} from "../../providers/api.service";
import {MenuItemModel} from "../../models/menu-item.model";

@IonicPage()

@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})

export class DrinkPage implements OnInit {

  public drinks: Array<MenuItemModel>;

  constructor(private apiService: ApiService) {
  }

  public ngOnInit(): void {
    this.apiService.getAllDrinks().subscribe((res) => {
      this.drinks = res;
    }, (err) => {
      console.log(err);
    })
  }
}

