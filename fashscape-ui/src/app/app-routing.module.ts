import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { ChoiceComponent } from './choice/choice.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'make-your-choice', component:ChoiceComponent},
  {path:'buy', component:BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
