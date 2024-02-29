import { Component } from '@angular/core';
import { GalleryLinksComponent } from '../gallery-links/gallery-links.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleryLinksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Tony\'s Cafe';
}
