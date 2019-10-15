import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[app-tab]'
})
export class TabDirective implements OnInit, OnDestroy {

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    let hostElement = this.elRef.nativeElement;
    if (!hostElement.querySelector('.tab-menu-item.active')) {
      hostElement.querySelector('.tab-menu-item').classList.add('active');
      hostElement.querySelector('.tab-content-item').classList.add('active');
    } else {
      var activeItem = Array.prototype.indexOf.call(hostElement.querySelectorAll('.tab-menu-item'), hostElement.querySelector('.tab-menu-item.active'));
      activeItem = hostElement.querySelectorAll('.tab-content-item').item(activeItem);
      activeItem.classList.add('active');
    }
    let tabItems = hostElement.querySelectorAll('.tab-menu-item');
    Array.from(tabItems).forEach(function(element:any) {
      element.addEventListener('click', function(e:any) {
        hostElement.querySelector('.tab-menu-item.active').classList.remove('active');
        
        if (e.target.classList.value.indexOf('tab-menu-item') > -1) {
          e.target.classList.add('active'); 
        } else {
          e.target.parentElement.classList.add('active'); 
        }
        let activeMenu = Array.prototype.indexOf.call(hostElement.querySelectorAll('.tab-menu-item'), hostElement.querySelector('.tab-menu-item.active'));
        hostElement.querySelector('.tab-content-item.active').classList.remove('active');
        hostElement.querySelectorAll('.tab-content-item').item(activeMenu).classList.add('active');
      });
    });
   
  }

  ngOnDestroy() {
    // this.elRef.nativeElement.removeEventListener('mouseenter', this.onMouseEnter);
  }
}
