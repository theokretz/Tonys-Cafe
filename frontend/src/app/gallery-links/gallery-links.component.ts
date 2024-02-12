import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-links',
  standalone: true,
  imports: [],
  templateUrl: './gallery-links.component.html',
  styleUrl: './gallery-links.component.css'
})
export class GalleryLinksComponent {
  backgroundColor = 'black'; // Initial background color
  fontColot = 'white';
  backgroundColortwo = 'black'; // Initial background color
  fontColottwo = 'white';
  borderBottom = 'black';
  lastBackgroundColor = this.backgroundColor; // Store the last color

  onMouseEnter() {
    this.lastBackgroundColor = this.backgroundColor;
    this.backgroundColor = 'white'; // New background color when hovering
    this.fontColot = 'black';
  }

  onMouseLeave() {
    this.backgroundColor = this.lastBackgroundColor;
    this.fontColot = 'white';
  }

  onMouseEntertwo() {
    this.backgroundColortwo = 'white'; // New background color when hovering
    this.fontColottwo = 'black';
  }

  onMouseLeavetwo() {
    this.backgroundColortwo = 'black';
    this.fontColottwo = 'white';
  }
}
