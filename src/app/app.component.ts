import { Component,enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffeeTime';

  money: string;
  donations: string[] = ['1','3','5'];

  constructor(){
    this.money;
  }
  
  onChangeValue(ev){
    this.money = ev.target.value;
 }

}
