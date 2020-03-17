import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-make-your-drink',
  templateUrl: './make-your-drink.component.html',
  styleUrls: ['./make-your-drink.component.css']
})
export class MakeYourDrinkComponent implements OnInit  {

  drinkTypes:HardCopy[] =[
    {id:0,name:"Tea"},
    {id:1,name:"Coffee"}
  ]
  drinkType:number;

  //drink base
  //teaBase:string[] =["Black","Green","Oolong","Pur'erh","White","Herbal"]
  teaBases:HardCopy[]=[
    {id:0,name:"Black"},
    {id:1,name:"Green"},
    {id:2,name:"Oolong"},
    {id:3,name:"Herbal"}, 
    {id:4,name:"Pur'erh"},
    {id:5,name:"White"} 
  ]
  teaBase:number;

  //coffeeBases:string[] =Object.keys(CoffeeBases).filter(key => !isNaN(Number(CoffeeBases[key])));
  coffeeBases:HardCopy[] =[
    {id:0,name:"Arabica"},
    {id:1,name:"Robusta"},
    {id:2,name:"Liberica"},
    {id:3,name:"Excelsa"}
  ]
  coffeeBase:number;

  espresso:string[]=["caffeinated","decaf"]
  shotsCount:string;

  //toppings
  toppings:string[] =["whipped cream","drizzles","crumbles","spice"]

  sweetner:string[] = ["sugar","spenda","equal","sweet'n low","honey"]

  foam:string[] = ["no","light","extra"]

  //milk:string[]=["nonfat","2%","whole","almond","soy"]
  milk:HardCopy[]=[
    {id:0,name:"none"},
    {id:1,name:"whole"},
    {id:2,name:"almond"},
    {id:3,name:"soy"},
    {id:4,name:"2%"}  
  ]
  milkVal:number;

  tempType:HardCopy[]=[
    {id:0,name:"Iced"},
    {id:1,name:"Hot"},
  ]
  temper:number;

  constructor() {
   }
  ngOnInit(): void {
  }
  onChangeValue(ev){
    
    this.drinkType = ev.target.value;
    
 }
 selected:number[];
 printChange(){
   this.selected=[this.drinkType,this.coffeeBase,this.milkVal,this.temper] 
  console.log(this.drinkType,this.coffeeBase,this.milkVal,this.temper)
 }
 
}

export class HardCopy{
  id:number;
  name:string;
}


