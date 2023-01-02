import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {
  scrollVisibleAfterPos = 100;
  @HostBinding('style.display') display:string = 'none';
  constructor() { }

  @HostListener('window:scroll',['$event'])
    scrollToTop(eventData: Event){
      // console.log(eventData);
      
      let windowScrollPos = document.documentElement.scrollTop || 0;
      if (windowScrollPos >= this.scrollVisibleAfterPos) {
        this.display = 'block';
      } else {
        this.display = 'none';
      }
    }

    @HostListener('click',['$event']) goToTop(eventData: Event) {
      // console.log(eventData);
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }

}
