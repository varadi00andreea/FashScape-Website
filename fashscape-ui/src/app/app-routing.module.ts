import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BuyComponent } from './buy/buy.component';
import { ChoiceComponent } from './choice/choice.component';
import { HelpComponent } from './help/help.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderComponent } from './order/order.component';
import { SellComponent } from './sell/sell.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'make-your-choice', component: ChoiceComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: 'help', component: HelpComponent },
  { path: 'single/:name', component: SingleProductComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
