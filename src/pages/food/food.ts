import {Component, OnInit} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ApiService} from "../../providers/api.service";
import {MenuItemModel} from "../../models/menu-item.model";

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})

export class FoodPage implements OnInit {

  public food: Array<MenuItemModel>;

  constructor(private apiService: ApiService) {
  }

  public ngOnInit(): void {

    this.apiService.getAllFood().subscribe((res) => {
      this.food = res;
    }, (err) => {
      console.log(err);
    });
  }
}
