import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DessertPage} from './dessert';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    DessertPage,
  ],
  imports: [
    IonicPageModule.forChild(DessertPage),
    ComponentsModule
  ],
})
export class DessertPageModule {
}
