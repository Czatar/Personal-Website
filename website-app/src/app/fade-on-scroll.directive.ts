import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFadeOnScroll]',
  standalone: true
})
export class FadeOnScrollDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.checkVisibility(); // Initial check
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    const middleStart = windowHeight * 0.12; // 12% from the top
    const middleEnd = windowHeight * 0.88; // 12% from the bottom

    let opacity = 1;

    if (elementTop >= middleStart && elementBottom <= middleEnd) {
      // Element is within the middle 76% of the viewport
      opacity = 1;
    } else if (elementBottom < middleStart || elementTop > middleEnd) {
      // Element is completely outside the viewport
      opacity = 0.3; // Set minimum opacity when off-screen
    } else {
      // Element is partially within the viewport
      if (elementTop < middleStart) {
        // Element is near the top
        opacity = 0.3 + 0.5 * ((elementBottom - middleStart) / (windowHeight * 0.1));
      } else if (elementBottom > middleEnd) {
        // Element is near the bottom
        opacity = 0.3 + 0.5 * ((middleEnd - elementTop) / (windowHeight * 0.1));
      }
    }

    this.setOpacity(opacity);
  }

  private setOpacity(opacity: number) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', opacity);
  }
}