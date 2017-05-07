import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {


  //This Class Will Be  Appended To The Host Element if
  // the property open = true

  @HostBinding('class.open') get opened(){
      return this.isOpen;
  }
  @HostListener('click') open() {
      this.isOpen = true;
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;

  }

  private isOpen = false;
  constructor() { }

}
