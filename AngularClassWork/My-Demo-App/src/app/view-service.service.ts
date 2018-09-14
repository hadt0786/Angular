import { Injectable } from '@angular/core';
import {ViewComponent} from '.';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
  valTest : number = 2;
  constructor() { }

  getTest(){
    return this.valTest;
  }
}
