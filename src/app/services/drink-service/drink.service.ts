//import { DrinkOrder } from './drink.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDrinkOrder } from 'src/app/data/drinkOrder';
import { Observable } from 'rxjs';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class DrinkService {
  drinkUrl = 'http://localhost:44352/api/drinkOrder/drinkOrders'
  constructor(private _http:HttpClient) { }

  getOrders():Observable<IDrinkOrder[]>{
     let data = this._http.get<IDrinkOrder[]>(this.drinkUrl)
     return data
  }
}

