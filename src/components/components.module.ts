import {NgModule} from '@angular/core';
import {MenuItemsComponent} from './menu-items/menu-items';
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [MenuItemsComponent],
  imports: [IonicModule],
  exports: [MenuItemsComponent]
})
export class ComponentsModule {
}
