import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeForMeComponent } from './coffee-for-me/coffee-for-me.component';


const routes:Routes=[
  {path:'coffees',component: CoffeeListComponent},
  {path:'buy-me',component:CoffeeForMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CoffeeListComponent,CoffeeForMeComponent]
