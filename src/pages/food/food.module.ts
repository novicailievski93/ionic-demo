import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FoodPage} from './food';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    FoodPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodPage),
    ComponentsModule
  ],
})
export class FoodPageModule {
}
