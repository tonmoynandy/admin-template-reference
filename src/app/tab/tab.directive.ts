import { Directive, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[app-tab]'
})
export class TabDirective implements OnInit {
  @Output() tabchange = new EventEmitter();
  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    let hostElement = this.elRef.nativeElement;
    var tabObj = this;
    if (hostElement.querySelector('.tab-menu') && hostElement.querySelector('.tab-content')) {

      var tabItems = hostElement.querySelector('.tab-menu').children;
      var tabContainerDom = hostElement.querySelector('.tab-content');
      let tabContent = tabContainerDom.innerHTML;
      let tabContentDom = document.createElement('div');
      tabContentDom.innerHTML = tabContent;
      tabContainerDom.innerHTML = '';
      var activeItem = 0;
      if (hostElement.querySelector('.active')) {
        activeItem = Array.prototype.indexOf.call(tabItems, hostElement.querySelector('.active'));
      }
      tabItems[activeItem].classList.add('active');
      tabContainerDom.innerHTML = tabContentDom.children.item(activeItem).outerHTML;
      
      new Promise((resolve, reject)=>{
        Array.from(tabItems).forEach((element:any, index:number) =>{
          if (!element.getAttribute('id')) {
            element.setAttribute('id', 'tab-'+index);
          }
          element.addEventListener('click', function(e:any) {
            hostElement.querySelector('.active').classList.remove('active');
            tabContainerDom.innerHTML = '';
            if (e.target.parentElement == hostElement.querySelector('.tab-menu')) {
              e.target.classList.add('active'); 
            } else {
              e.target.parentElement.classList.add('active'); 
            }
            let activeMenu =  Array.prototype.indexOf.call(tabItems, hostElement.querySelector('.active'));
            tabContainerDom.innerHTML = tabContentDom.children.item(activeMenu).outerHTML;
  
            tabObj.emitOnchnageEvent(activeMenu, tabItems);
          });
          
        });
        resolve(true);
      }).then((resolveData)=>{
        this.emitOnchnageEvent(activeItem, tabItems);
      });
    } else {
      console.error("'.tab-menu' or '.tab-content' is missing");
    }
   
  }

  emitOnchnageEvent( activeMenu, tabItems) {
    //** ONLY FOR ANGULAR  ***//
    this.tabchange.emit({
      index: activeMenu,
      current : tabItems[activeMenu].getAttribute('id'),
      previous: (tabItems[activeMenu-1])?tabItems[activeMenu-1].getAttribute('id'):null,
      next: (tabItems[activeMenu+1])?tabItems[activeMenu+1].getAttribute('id'):null,
    });
    //** END  ***//
  }

}
