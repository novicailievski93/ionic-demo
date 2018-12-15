import {Component} from '@angular/core';

import {FoodPage} from "../food/food";
import {DessertPage} from "../dessert/dessert";
import {DrinkPage} from "../drink/drink";

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = FoodPage;
  tab2Root = DessertPage;
  tab3Root = DrinkPage;

  constructor() {
  }
}
