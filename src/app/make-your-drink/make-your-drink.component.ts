import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-make-your-drink',
  templateUrl: './make-your-drink.component.html',
  styleUrls: ['./make-your-drink.component.css']
})
export class MakeYourDrinkComponent implements OnInit  {

  drinkTypes:DrinkTypes[] =[
    {id:0,name:"Tea"},
    {id:1,name:"Coffee"}
  ]
  drinkType:any;


  //drink base
  teaBase:string[] =["Black","Green","Oolong","Pur'erh","White","Herbal"]
  coffeeBases:string[] =Object.keys(CoffeeBases).filter(key => !isNaN(Number(CoffeeBases[key])));
  espresso:string[]=["caffeinated","decaf"]
  shotsCount:string;

  //toppings
  toppings:string[] =["whipped cream","drizzles","crumbles","spice"]

  sweetner:string[] = ["sugar","spenda","equal","sweet'n low","honey"]

  foam:string[] = ["no","light","extra"]

  milk:string[]=["nonfat","2%","whole","almond","soy"]

  tempType:string[]=["iced","hot"]
  
  constructor() {
   }
  ngOnInit(): void {
  }
  onChangeValue(ev){
    
    this.drinkType = ev.target.value;
    
 }
 printChange(){
  console.log(this.drinkType)
 }

 enumToObject(enu){
  return Object.keys(enu).filter(
    (type) => isNaN(<any>type) && type !== 'values'
  );
 }
}

export class DrinkTypes{
  id:number;
  name:string;
}

enum CoffeeBases{
  Arabica=0,
  Robusta
  ,Liberica
  ,Excelsa
}

