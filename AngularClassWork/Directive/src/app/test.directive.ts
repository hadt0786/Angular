import { Directive, HostListener, Host, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private el : ElementRef) { }
  @HostListener ('focus') onFocus(){
    console.log("Focus called");
  }

  @HostListener('blur') onblur(){
    console.log("blure called");

    let userInput : any = this.el.nativeElement.value;
    let ans = [];
    for(let i =0;i<userInput.length;i++)
    {
      console.log(userInput[i]);
      ans = userInput.split(" ");
      ans[i].charAt(0).toUppercas
      
    }

    // console.log(userInput);
    // this.el.nativeElement.value = "testing directive";
    // console.log(userInput);
  }


}
