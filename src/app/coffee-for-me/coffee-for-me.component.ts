import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-for-me',
  templateUrl: './coffee-for-me.component.html',
  styleUrls: ['./coffee-for-me.component.css']
})
export class CoffeeForMeComponent implements OnInit {
  title = 'coffeeTime';

  money: string;
  donations: string[] = ['1','3','5'];
  
  constructor(){
    this.money;
  }
  
  ngOnInit(): void {
  }
  onChangeValue(ev){
    this.money = ev.target.value;
 }
}
