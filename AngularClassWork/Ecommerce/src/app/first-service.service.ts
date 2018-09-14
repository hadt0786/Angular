import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor() { }

  getItem(){

    var item= ['item1', 'item2', 'item3'];
    return item;
  }
  getCategory(){
    var category= ['cat1', 'cat2', 'cat3'];
    return category;
  }
  getPrice(){
    var price = [22, 33, 44];
    return price;
  }
}


