import { ITopping } from './topping'

export interface IDrinkOrder{
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
    toppingList:Array<ITopping>
  }