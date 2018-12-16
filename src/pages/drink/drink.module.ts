import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DrinkPage} from './drink';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    DrinkPage,
  ],
  imports: [
    IonicPageModule.forChild(DrinkPage),
    ComponentsModule
  ],
})
export class DrinkPageModule {
}
