import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  imgUrl = 'https://picsum.photos/id/237/500/500'
  images=['https://picsum.photos/id/237/500/500','https://picsum.photos/id/237/500/500']
  currentDate = new Date();
  cost=2000;
  temperature = 25.3
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }
  color ='blue'
  name = 'luis ramirez';
  blueClass = false;
  fontSize = 16;
  getName(){
    return this.name
  }
 changeImage(e: KeyboardEvent){
this.imgUrl = (e.target as HTMLInputElement).value
 }
 logImg(event:string){
console.log(event)
 }

}
