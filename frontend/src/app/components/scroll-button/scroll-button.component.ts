import { Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  standalone: true,
  imports: [],
  templateUrl: './scroll-button.component.html',
  styleUrl: './scroll-button.component.css'
})
export class ScrollButtonComponent {

  constructor(private renderer: Renderer2) {}

  scrollDown() {
    const windowHeight = window.innerHeight;
    const scrollStep = windowHeight / 20; // Adjust the scroll speed as needed

    let scrollCount = 0;
    const scrollInterval = setInterval(() => {
      if (scrollCount < windowHeight + 10) {
        this.renderer.setProperty(document.documentElement, 'scrollTop', scrollCount);
        this.renderer.setProperty(document.body, 'scrollTop', scrollCount);
        scrollCount += scrollStep;
      } else {
        clearInterval(scrollInterval);
      }
    }, 16); // 60 FPS
  }
}
