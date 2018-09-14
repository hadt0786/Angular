import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  test:number = 2;
  testLocal:string = "global";

  constructor() { }
  getTest(){
    this.testLocal = "Inside the service of the component/app";

    return this.testLocal;
  }

}
