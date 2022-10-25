import { Directive , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {
  selectedIndex =0;
  constructor(private el: ElementRef) { }
  @HostListener('click')
  selectedItem(index: number):void{
    this.selectedIndex = index;
  }
  prevFunc():void{
     var elm = this.el.nativeElement.parentElement.parentElement.children[0];
     var item = elm.getElementsByClassName("item");
    
    if(this.selectedIndex === 0){
          this.selectedIndex --;
    }
      else{
         this.selectedIndex= this.selectedItem.length -1;
       }
    }
  }

