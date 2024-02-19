import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private elRef: ElementRef) {}

  moveScreenDown() {
    // Get the native DOM element
    const nativeElement = this.elRef.nativeElement;

    // Calculate the new scroll position
    const currentScrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const newPosition = currentScrollPosition + windowHeight;

    // Animate scrolling to the new position
    window.scrollTo({
      top: newPosition,
      behavior: 'smooth'
    });
  }
}
