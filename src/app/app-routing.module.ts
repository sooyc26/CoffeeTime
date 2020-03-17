import { MakeYourDrinkComponent } from './make-your-drink/make-your-drink.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeForMeComponent } from './coffee-for-me/coffee-for-me.component';


const routes:Routes=[
  {path:'coffees',component: CoffeeListComponent},
  {path:'buy-me',component:CoffeeForMeComponent},
  {path:'make-your-drink',component:MakeYourDrinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = 
[
  CoffeeListComponent,
  CoffeeForMeComponent,
  MakeYourDrinkComponent
]
