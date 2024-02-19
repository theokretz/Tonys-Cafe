import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

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

