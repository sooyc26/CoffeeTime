import { IDrinkOrder } from './../data/drinkOrder';
import { DrinkService } from './../services/drink-service/drink.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-list',
  // template: `
  //   <p>
  //     coffee-list works!
  //   </p>
  // `,
  templateUrl: './coffee-list.component.html',

  styles: []
})
export class CoffeeListComponent implements OnInit {

    orderList: IDrinkOrder[]
  constructor(private service:DrinkService) { 

  }

  ngOnInit(): void {
    this.service.getOrders()
    .subscribe(data=>{
        this.orderList = data
        console.log(data)
    });
  }

}

