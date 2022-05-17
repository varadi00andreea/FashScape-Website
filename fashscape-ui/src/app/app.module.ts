import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ChoiceComponent } from './choice/choice.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HelpComponent } from './help/help.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ChoiceComponent,
    BuyComponent,
    SellComponent,
    HelpComponent,
    SingleProductComponent,
    AboutUsComponent,
    ShoppingCartComponent,
    UpdateProfileComponent,
    OrderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
