import { Component } from '@angular/core';
import { GalleryLinksComponent } from '../gallery-links/gallery-links.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [GalleryLinksComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Tony\'s Cafe';
}
