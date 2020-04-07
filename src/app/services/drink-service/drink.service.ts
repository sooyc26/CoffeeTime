import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  drinkUrl = 'https://localhost:44352/api/drinkorder/drinkorders'
  constructor(private _http:HttpClient) { }

  getOrders(){
    return this._http.get<any>(this.drinkUrl)
  }
}

export class DrinkOrder{
  id:number
  type:number
  baseId:number
  toppingId:number
  toppingOrderId:number
  topping:string
  syrupId:number
  syrup:string
  milkId:number
  milk:string
  isIced:boolean
  isDecaf:boolean
  toppingList:Array<Topping>
}
export class Topping{
  id:number
  orderId:number
  Toppingname:string
}
